import { useDispatch, useSelector } from "react-redux"
import { Message } from "./MessageListItem/Message"
import styles from '../Messages.module.scss'
import React, { useEffect, useMemo } from "react"
import { getMessageList } from "../../../../redux/reducers/messagesReducer/selectorMessages"
import { subscribeOnNewMessages, unsubscribeOnNewMessages } from "../../../../redux/actions"


export default function MessageList( { uid } ) {
    const getSelectedChat = useMemo( () => getMessageList( uid ), [uid] );
    const messages = useSelector( getSelectedChat, ( prev, next ) => ( prev.length !== next.length ) && ( prev.uid !== next.uid ) );
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( subscribeOnNewMessages( uid ) );
        let el = document.getElementById( 'lastElement' ); el.scrollIntoView( { behavior: 'smooth' } );
        return () => {
            dispatch( unsubscribeOnNewMessages( uid ) )
        }
    }, [uid, dispatch] )
    const list = messages.map( ( el ) => <div className={el.author !== 'you' ? styles.bot : styles.user} key={`${el.idMessage}_box`}>  <Message Message={el.message} key={`${el.idMessage}_m`} /> </div> )
    return (
        <>
            {list && list}
            <div id='lastElement' />
        </>
    )
}

// const MessageMemo = React.memo( Message );