import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './MessageInputNewMessage.module.scss'

import { inputChat, sendMessageWithSage } from "../../../../redux/actions";

export default function MessagesInputNewMessage( { uid } ) {

    const inputRef = useRef();
    const dispatch = useDispatch();
    const textMessage = useSelector( state => state.messages.textNewMessage );

    const onChangeInput = ( e ) => {
        e.preventDefault();
        dispatch( inputChat( e.target.value ) );
    }
    const onSendMessage = ( e ) => {
        e.preventDefault();
        dispatch( sendMessageWithSage( uid ) );
    }


    return (
        <>
            <TextField
                className={style.inputMessageArea}
                fullWidth
                ref={inputRef}
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