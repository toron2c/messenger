import { useDispatch, useSelector } from "react-redux";
import style from './MessageInputNewMessage.module.scss'

import { inputChat, sendMessageWithSaga } from "../../../../redux/actions";

export default function MessagesInputNewMessage( { uid } ) {

    const dispatch = useDispatch();
    const textMessage = useSelector( state => state.messages.textNewMessage );

    const onChangeInput = ( e ) => {
        e.preventDefault();
        dispatch( inputChat( e.target.value ) );
    }
    const onSendMessage = ( e ) => {
        e.preventDefault();
        if ( textMessage !== '' ) {
            dispatch( sendMessageWithSaga( uid ) );
            document.getElementById( 'inputRef' ).focus();
        }
    }


    return (
        <div className={style.box}>
            <textarea
                className={style.inputMessageArea}
                autoFocus
                id={'inputRef'}
                value={textMessage}
                onChange={onChangeInput}
                placeholder='text message'
            />
            <button className={style.buttonEnter} onClick={onSendMessage}>
                Отправить
            </button>
        </div>
    )
}