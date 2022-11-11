import { Button, TextareaAutosize } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from './Messages.module.scss'
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Message } from './Message/Message';
import { useRef } from 'react';


export default function Messages() {
    const [messageList, setMessageList] = useState( [] );
    const [textMessage, setTextMessage] = useState( "" );
    const inputRef = useRef();
    useEffect( () => {
        inputRef.current.focus();
    }, [] )
    useEffect( () => {
        if ( messageList.length > 0 && messageList[messageList.length - 1].author === 'user' ) {
            let timer = setTimeout( () => {
                setMessageList( [...messageList, { text: "Я всего лишь робот, который умеет только писать это сообщение :(", author: 'bot' }] );
            }, 1500 )
            return () => {
                clearTimeout( timer );
            }
        }
    }, [messageList] )

    const onChangeInput = ( e ) => {
        e.preventDefault();
        setTextMessage( e.target.value );
    }
    const onSendMessage = ( e ) => {
        e.preventDefault();
        if ( textMessage === '' ) return;
        setMessageList( [...messageList, { text: textMessage, author: 'user' }] );
        setTextMessage( '' );
        inputRef.current.focus();
    }
    let messages = messageList.map( ( el, idx ) => <div className={el.author === 'bot' ? styles.bot : styles.user} key={idx}><Message Message={el.text} key={idx} /></div> );
    return (
        <div className={styles.box}>
            <div className={styles.messages}>
                {messages && messages}
            </div>
            <div className={styles.input}>
                <TextareaAutosize
                    ref={inputRef}
                    value={textMessage}
                    onChange={onChangeInput}
                    aria-label="maximum height"
                    placeholder="Text message"
                    maxLength={100}
                    style={{ width: '100%', height: '95%', borderRadius: 7 }}
                />
                <Button variant="contained" endIcon={<SendIcon />} onClick={onSendMessage}>
                    Send
                </Button>
            </div>
        </div> )
}