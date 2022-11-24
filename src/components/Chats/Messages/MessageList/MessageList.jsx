import { useSelector } from "react-redux"
import { Message } from "./MessageListItem/Message"
import styles from '../Messages.module.scss'
import React, { useMemo } from "react"
import { getMessageList } from "../../../../redux/reducers/messagesReducer/selectorMessages"
import { useParams } from "react-router-dom"


export default function MessageList() {
    const { id } = useParams();
    const getSelectedChat = useMemo( () => getMessageList( id ), [id] );
    const messages = useSelector( getSelectedChat );

    const list = messages ? messages.map( ( el, idx ) => <div className={el.author === 'bot' ? styles.bot : styles.user} key={idx}><MessageMemo Message={el.text} key={idx} /></div> ) : ''
    return (
        <>
            {list}
        </>
    )
}

const MessageMemo = React.memo( Message );