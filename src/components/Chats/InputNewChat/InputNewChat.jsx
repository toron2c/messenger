import { addNewChat, changeNameNewChat } from "../../../redux/actions";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import style from './InputNewChat.module.scss'

export default function InputNewChat() {
    const dispatch = useDispatch();

    const newNameChat = useSelector( state => state.chats.nameNewChat );
    const onChangeInputNewChat = ( e ) => {
        e.preventDefault();
        dispatch( changeNameNewChat( e.target.value ) );
    }

    const addNewChatHandler = ( e ) => {
        e.preventDefault();
        if ( newNameChat ) {
            dispatch( addNewChat() );
        }
    }


    return (
        <form>
            <TextField type='email' required onChange={onChangeInputNewChat} value={newNameChat} label="Name chat" variant="outlined" />
            <div className={style.newChatButton}><Button type="submit" onClick={addNewChatHandler} variant="contained">Create</Button></div>
        </form> )
}