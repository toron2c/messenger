
import styles from './Messages.module.scss'
import * as React from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import MessagesInputNewMessage from './MessagesInputNewMessage/MessagesInputNewMessage';
import MessageList from './MessageList/MessageList';

export default function Messages() {
    const { id } = useParams();
    const isCorrectId = useSelector( state => state.chats.chatList.find( el => el.id === id ) )


    return ( <>
        {isCorrectId ?
            <div className={styles.box}>
                <div className={styles.messagesName}>{isCorrectId.name}</div>
                <div className={styles.messages}>
                    <MessageList idChat={id} />
                </div>
                <div className={styles.input}>
                    <MessagesInputNewMessage id={id} />
                </div>
            </div>
            : <p className={styles.warning}>Pls choice the chat</p>
        }
    </>
    )
}
