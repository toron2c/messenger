
import styles from './Messages.module.scss'
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import MessagesInputNewMessage from './MessagesInputNewMessage/MessagesInputNewMessage';
import MessageList from './MessageList/MessageList';
import { useEffect, useMemo, useRef } from 'react';
import { checkCorrectId } from '../../../redux/reducers/chatsReducer/selectorChats';
import { getOldMessagesWithSaga, updateLastMessagesWithSaga } from '../../../redux/actions';


export default function Messages() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const checkId = useMemo( () => checkCorrectId( id ), [id] );
    const isCorrectId = useSelector( checkId );
    const boxMessage = useRef();

    useEffect( () => {
        if ( isCorrectId ) {
            dispatch( updateLastMessagesWithSaga( isCorrectId.chatId ) )
        }
    }, [isCorrectId, dispatch] )

    const onScrollFunction = () => {
        const scroll = Math.abs( boxMessage.current.getBoundingClientRect().top - boxMessage.current.offsetTop )
        if ( scroll < 1 ) {
            dispatch( getOldMessagesWithSaga( isCorrectId.chatId ) )
        }
    }
    return ( <>
        {isCorrectId ?
            <div className={styles.box}>
                <div className={styles.messagesName}>{isCorrectId.nameDialog}</div>
                <div onScroll={onScrollFunction} className={styles.messages}>
                    <div ref={boxMessage} />
                    <MessageList uid={isCorrectId.chatId} />
                </div>
                <div className={styles.input}>
                    <MessagesInputNewMessage uid={isCorrectId.chatId} />
                </div>
            </div>
            : <p className={styles.warning}>Pls choice the chat</p>
        }
    </>
    )
}
