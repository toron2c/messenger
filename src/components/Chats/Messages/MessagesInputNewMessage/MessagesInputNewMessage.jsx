import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
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
        <>
            <TextField
                className={style.inputMessageArea}
                fullWidth
                autoFocus
                id={'inputRef'}
                value={textMessage}
                onChange={onChangeInput}
                multiline
                rows={3}
                placeholder='text message'
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={onSendMessage}>
                Send
            </Button>
        </>
    )
}