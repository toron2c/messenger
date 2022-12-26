import { addNewChat, changeNameNewChat, toggleNewChatInput } from "../../../redux/actions";
import { Button, TextField } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import style from './InputNewChat.module.scss'
import { getErrorMessageChats, getStatusErrorChats } from "../../../redux/reducers/chatsReducer/selectorChats";

export default function InputNewChat() {
    const dispatch = useDispatch();

    const newNameChat = useSelector( state => state.chats.nameNewChat );
    const isError = useSelector( getStatusErrorChats(), shallowEqual );
    const errorMessage = useSelector( getErrorMessageChats(), shallowEqual );
    const onChangeInputNewChat = ( e ) => {
        e.preventDefault();
        dispatch( changeNameNewChat( e.target.value ) );
    }

    const addNewChatHandler = ( e ) => {
        e.preventDefault();
        if ( newNameChat ) {
            dispatch( addNewChat() );
        } else {
            dispatch( toggleNewChatInput() )
        }
    }


    return (
        <div className={style.boxAddedChat}>
            <TextField error={isError} type='email' required onChange={onChangeInputNewChat} value={newNameChat} label="email user" variant="outlined" />
            <div className={style.newChatButton}>
                {isError && <div className={style.error}>{errorMessage}</div>}
                <Button type="submit" onClick={addNewChatHandler} variant="contained">add</Button></div>
        </div> )
}