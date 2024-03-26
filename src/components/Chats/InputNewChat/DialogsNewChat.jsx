import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNewChatInput } from "../../../redux/actions";
import { getStatusFieldInput } from "../../../redux/reducers/chatsReducer/selectorChats";
import InputNewChat from "./InputNewChat";
import style from './InputNewChat.module.scss'


export default function DialogsNewChat() {
    const dispatch = useDispatch();
    const getStatusInput = useMemo( () => getStatusFieldInput(), [] );
    const inputNewDialog = useSelector( getStatusInput );

    const setInputVisible = ( e ) => {
        e.preventDefault();
        dispatch( toggleNewChatInput() )
    }
    return (
        !inputNewDialog ? <div className={style.buttonAddChat}><button className={style.buttonAddChat__input} onClick={setInputVisible}>Добавить друга</button> </div> :
            <InputNewChat />
        
       
   )
}