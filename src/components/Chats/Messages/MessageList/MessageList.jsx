import { shallowEqual, useSelector } from "react-redux"
import { Message } from "./MessageListItem/Message"
import styles from '../Messages.module.scss'
import React, { useEffect, useMemo, useRef } from "react"
import { getMessageList } from "../../../../redux/reducers/messagesReducer/selectorMessages"
import { uuid } from "uuidv4"


export default function MessageList( { uid } ) {
    // const getSelectedChat = 
    // ( prev, next ) => prev.length !== next.length
    const messages = useSelector( state => {
        console.log( state.messages.messageList[uid].messages )
        return state.messages.messageList[uid].messages
    }, ( prev, next ) => prev.length !== next.length );
    const unique_id = uuid();
    const small_id = unique_id.slice( 0, 8 )
    useEffect( () => {
        // let el = document.getElementById( 'lastElement' ); el.scrollIntoView( { behavior: 'smooth' } );
    }, [messages] )

    const list = messages ? messages.map( ( el, idx ) => <div className={el.author !== 'you' ? styles.bot : styles.user} key={small_id}><Message Message={el.message} key={`${small_id}_m`} /></div> ) : ''
    return (
        <>
            {list}
            <div id='lastElement' />
        </>
    )
}

// const MessageMemo = React.memo( Message );