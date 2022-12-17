import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './MessageInputNewMessage.module.scss'

import { inputChat, sendMessageWithSage } from "../../../../redux/actions";

// import { db } from "../../../../services/firebase";

import { getDatabase, ref, set } from "firebase/database";

import { auth } from './../../../../services/firebase'

export default function MessagesInputNewMessage( { id } ) {

    const inputRef = useRef();
    const dispatch = useDispatch();
    const textMessage = useSelector( state => state.messages.textNewMessage );


    // const onChangeInput = ( e ) => {
    //     e.preventDefault();
    //     dispatch( inputChat( e.target.value ) );
    // }
    // const onSendMessage = ( e ) => {
    //     e.preventDefault();
    //     if ( textMessage === '' ) return;
    //     dispatch( sendMessageWithSage( id, 'user' ) );
    //     inputRef.current.focus();
    // }
    // const db = getDatabase();
    // const user = auth.currentUser;
    // console.log( user );
    // const onSendMessage = async ( e ) => {
    //     e.preventDefault();
    //     try {
    //         // set( ref( db, 'messages/' + id, ), {
    //         //     message: textMessage,
    //         //     user: user
    //         // } )
    //         set( ref( db, 'profile/' + user.uid ), {
    //             status: '',
    //             about: '',
    //         } )
    //         // console.log( b );
    //     } catch ( error ) {
    //         console.log( error );
    //     }
    // }

    return (
        <>
            {/* <TextField
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
            </Button> */}
        </>
    )
}