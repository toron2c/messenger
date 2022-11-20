import { useSelector } from "react-redux"
import { Message } from "./MessageListItem/Message"
import styles from '../Messages.module.scss'
import React from "react"

export default function MessageList( { idChat } ) {
    const messages = useSelector( state => state.messages.messageList[idChat] )

    const list = messages ? messages.map( ( el, idx ) => <div className={el.author === 'bot' ? styles.bot : styles.user} key={idx}><MessageMemo Message={el.text} key={idx} /></div> ) : ''
    return (
        <>
            {list}
        </>
    )
}

const MessageMemo = React.memo( Message );