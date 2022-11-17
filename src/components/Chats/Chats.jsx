import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import style from './Chats.module.scss'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

let initialState = {
    chats: [{ name: "Your Friend", id: '1', messages: [] },
    { name: "Your Friend2", id: '2', messages: [] },
    { name: "Your Friend3", id: '3', messages: [] },
    { name: "Your Friend5", id: '4', messages: [] }]
}

export default function Chats() {
    let [chatList, setChatList] = useState( initialState );
    let [inputNewDialog, setInputNewDialog] = useState( false );
    let [newNameChat, setNameNewChat] = useState( '' );
    const { id } = useParams();
    let addMessage = ( message, idChat ) => {
        initialState = {
            ...initialState,
            chats: [...chatList.chats.map( el => {
                if ( el.id === idChat ) {
                    el.messages.push( message );
                }
                return el;
            } )]
        }
        setChatList( initialState );
    }
    const onChangeInputNewChat = ( e ) => {
        e.preventDefault();
        setNameNewChat( e.target.value );
    }

    const addNewChat = ( e ) => {
        e.preventDefault();
        if ( newNameChat === '' ) {
            setInputNewDialog( false );
            return;
        }
        let lastId = 1;
        if ( chatList.chats.length > 0 ) {
            lastId = Number( chatList.chats[chatList.chats.length - 1].id ) + 1;
        }
        let newElem = { name: newNameChat, id: lastId.toString(), messages: [] }
        initialState = {
            ...chatList,
            chats: [...chatList.chats, newElem]
        }
        setChatList( initialState );
        setNameNewChat( '' );
        setInputNewDialog( false );
    }
    const removeChat = ( idChat ) => {
        initialState = {
            ...initialState,
            chats: [...chatList.chats.filter( el => el.id !== idChat )]
        }
        setChatList( initialState );
    }

    return ( <div className={style.chats}>
        <div className={style.containerDialog}>
            <div className={style.dialogs}>
                <Dialogs removeDialog={removeChat} dialogs={chatList.chats.map( el => {
                    let new_element = { name: el.name, id: el.id };
                    return new_element;
                } )} />
            </div>
            <div className={style.containerNewDialog}>
                {!inputNewDialog ? <div><Button onClick={() => { setInputNewDialog( true ) }} variant="contained">Add chat</Button></div> :
                    <div>
                        <div><TextField onChange={onChangeInputNewChat} value={newNameChat} id="outlined-basic" label="Name chat" variant="outlined" /></div>
                        <div className={style.newChatButton}><Button onClick={addNewChat} variant="contained">Create</Button></div></div>}
            </div>

        </div>
        <div className={style.messages}>
            {!chatList.chats.find( el => el.id === id ) ? <p className={style.warning}>Please, choose your friend in your chat lists</p> : <Messages dialog={chatList.chats.find( el => el.id === id )} addMessage={addMessage} />}
        </div>
    </div> )
}