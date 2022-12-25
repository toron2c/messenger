import { useDispatch, useSelector } from "react-redux"
import { Message } from "./MessageListItem/Message"
import styles from '../Messages.module.scss'
import React, { useEffect } from "react"
import { getMessageList } from "../../../../redux/reducers/messagesReducer/selectorMessages"
import { subscribeOnNewMessages, unsubscribeOnNewMessages } from "../../../../redux/actions"

/**
 * create new component with old messages, which not dependencies  with new and current messages, which have state old messages
 * 
 */


export default function MessageList( { uid } ) {
    const messages = useSelector( getMessageList( uid ), ( prev, next ) => ( prev.length !== next.length ) );
    const dispatch = useDispatch();
    let startDate;
    useEffect( () => {
        dispatch( subscribeOnNewMessages( uid ) );
        return () => {
            dispatch( unsubscribeOnNewMessages( uid ) )
        }
    }, [uid, dispatch] )
    const list = messages.map( ( el ) => {
        let time = new Date( el.TimestampServer ? el.TimestampServer : new Date() );
        if ( ( startDate === undefined ) || ( startDate.getDate() !== time.getDate() ) ) {
            startDate = time;
            let tmpDate = startDate.toLocaleString( 'default', { month: 'long' } )
            return <React.Fragment key={el.idMessage}><div key={`${el.idMessage}_date`} className={styles.date}>{tmpDate} {startDate.getDate()}</div><MessageMemo el={el} key={`${el.idMessage}_m`} /></React.Fragment >
        }
        return <MessageMemo key={`${el.idMessage}_message`} el={el} />
    } )
    return (
        <>
            {list && list}
            <div id='lastElement' />
        </>
    )
}

const MessageMemo = React.memo( Message );