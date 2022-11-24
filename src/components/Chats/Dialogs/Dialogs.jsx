import { List } from "@mui/material";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { getChatsList } from "../../../redux/reducers/chatsReducer/selectorChats";
import DialogItem from "./DialogItem/DialogItem";

export default function Dialogs() {
    const getDialogs = useCallback( () => getChatsList(), [] );

    const dialogs = useSelector( getDialogs() );


    let list = dialogs.map( el => <DialogItemMemo key={el.id} id={el.id} name={el.name} /> )
    return ( <div>
        <List dense>{list}</List>
    </div> )
}

const DialogItemMemo = React.memo( DialogItem );