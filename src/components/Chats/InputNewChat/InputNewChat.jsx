import { addNewChat, changeNameNewChat } from "../../../redux/actions";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import style from './InputNewChat.module.scss'

export default function InputNewChat() {
    const dispatch = useDispatch();

    const newNameChat = useSelector( state => state.chats.newNameChat );
    const onChangeInputNewChat = ( e ) => {
        e.preventDefault();
        dispatch( changeNameNewChat( e.target.value ) );
    }

    const addNewChatHandler = ( e ) => {
        e.preventDefault();
        dispatch( addNewChat() );
    }


    return (
        <>
            <TextField onChange={onChangeInputNewChat} value={newNameChat} id="outlined-basic" label="Name chat" variant="outlined" />
            <div className={style.newChatButton}><Button onClick={addNewChatHandler} variant="contained">Create</Button></div>
        </> )
}