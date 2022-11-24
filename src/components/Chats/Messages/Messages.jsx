
import styles from './Messages.module.scss'
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import MessagesInputNewMessage from './MessagesInputNewMessage/MessagesInputNewMessage';
import MessageList from './MessageList/MessageList';
import { useMemo } from 'react';
import { checkCorrectId } from '../../../redux/reducers/chatsReducer/selectorChats';


export default function Messages() {
    const { id } = useParams();
    const checkId = useMemo( () => checkCorrectId( id ), [id] );
    const isCorrectId = useSelector( checkId );

    return ( <>
        {isCorrectId ?
            <div className={styles.box}>
                <div className={styles.messagesName}>{isCorrectId.name}</div>
                <div className={styles.messages}>
                    <MessageList />
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
