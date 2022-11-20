import { Button, TextareaAutosize } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputChat, sendMessage, sendMessageBot } from "../../../../redux/actions";

export default function MessagesInputNewMessage( { id } ) {

    const inputRef = useRef();
    const dispatch = useDispatch();
    const textMessage = useSelector( state => state.messages.textNewMessage );

    const currChat = useSelector( state => state.messages.messageList[id] )

    useEffect( () => {
        if ( currChat ) {
            if ( currChat.length > 0 && currChat[currChat.length - 1].author === 'user' ) {
                let timer = setTimeout( () => {
                    dispatch( sendMessageBot( id ) );
                }, 1500 )
                return () => {
                    clearTimeout( timer );
                }
            }
        }
    }, [currChat, dispatch, id] )

    const onChangeInput = ( e ) => {
        e.preventDefault();
        dispatch( inputChat( e.target.value ) );
    }
    const onSendMessage = ( e ) => {
        e.preventDefault();
        if ( textMessage === '' ) return;
        dispatch( sendMessage( id ) );
        inputRef.current.focus();
    }

    return (
        <>
            <TextareaAutosize
                ref={inputRef}
                value={textMessage}
                onChange={onChangeInput}
                aria-label="maximum height"
                placeholder="Text message"
                style={{ width: '100%', height: '95%', borderRadius: 7 }}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={onSendMessage}>
                Send
            </Button>
        </>
    )
}