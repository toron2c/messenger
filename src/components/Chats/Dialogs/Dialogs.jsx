import { List } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import DialogItem from "./DialogItem/DialogItem";


export default function Dialogs() {
    const dialogs = useSelector( state => state.chats.chatList, ( prev, next ) => prev.length === next.length );
    let list = dialogs.map( el => <DialogItemMemo key={el.id} id={el.id} name={el.name} /> )
    return ( <div>
        <List dense>{list}</List>
    </div> )
}

const DialogItemMemo = React.memo( DialogItem );