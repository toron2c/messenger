import { useDispatch, useSelector } from "react-redux"
import { Message } from "./MessageListItem/Message"
import styles from '../Messages.module.scss'
import React, { useEffect, useMemo } from "react"
import { getMessageList } from "../../../../redux/reducers/messagesReducer/selectorMessages"
import { subscribeOnNewMessages, unsubscribeOnNewMessages } from "../../../../redux/actions"

/**
 * create new component with old messages, which not dependencies  with new and current messages, which have state old messages
 * 
 */


export default function MessageList( { uid } ) {
    const getSelectedChat = useMemo( () => getMessageList( uid ), [uid] );
    const messages = useSelector( getSelectedChat, ( prev, next ) => ( prev.length !== next.length ) && ( prev.uid !== next.uid ) );
    const dispatch = useDispatch();
    // let startDate;
    useEffect( () => {
        dispatch( subscribeOnNewMessages( uid ) );
        return () => {
            dispatch( unsubscribeOnNewMessages( uid ) )
        }
    }, [uid, dispatch] )
    const list = messages.map( ( el ) => {
        // console.log( el.TimestampServer )
        // debugger;
        // if ( ( startDate === undefined ) || ( startDate.getDate() !== new Date().getDate() ) ) {
        // startDate = el.TimestampServer;
        // let tmpDate = startDate.toLocaleString( 'default', { month: 'long' } )
        // return <div key={`${el.idMessage}_date`} className={styles.date}>{tmpDate} {startDate.getDate()}<div className={el.author !== 'you' ? styles.bot : styles.user} key={`${el.idMessage}_box`}>  <MessageMemo time={el.TimestampServer} Message={el.message} key={`${el.idMessage}_m`} /> </div></div>
        // }
        return <div className={el.author !== 'you' ? styles.bot : styles.user} key={`${el.idMessage}_box`}>  <MessageMemo time={el.TimestampServer} Message={el.message} key={`${el.idMessage}_m`} /> </div>
    } )
    return (
        <>
            {list && list}
            <div id='lastElement' />
        </>
    )
}

const MessageMemo = React.memo( Message );