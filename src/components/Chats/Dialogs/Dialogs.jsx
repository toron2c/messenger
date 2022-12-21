import { List } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closedSubscribeOnNewChats, setSubscribeOnNewChats } from "../../../redux/actions";
import { getChatsList } from "../../../redux/reducers/chatsReducer/selectorChats";
import DialogItem from "./DialogItem/DialogItem";

export default function Dialogs() {
    const dispatch = useDispatch();
    const statusSubscribeOnNewChats = useSelector( state => state.chats.subscribeActived, ( prev, next ) => prev !== next )
    useEffect( () => {
        dispatch( setSubscribeOnNewChats() );
        return () => {
            dispatch( closedSubscribeOnNewChats() );
        }
    }, [statusSubscribeOnNewChats, dispatch] )

    const getDialogs = useCallback( () => getChatsList(), [] );
    const dialogs = useSelector( getDialogs() );


    let list = dialogs.map( ( el ) => <DialogItemMemo key={el.chatId} id={el.linkToDialog} name={el.nameDialog} /> )
    return ( <div>
        <List dense>{list}</List>
    </div> )
}

const DialogItemMemo = React.memo( DialogItem );