import { List } from "@mui/material";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatsList } from "../../../redux/reducers/chatsReducer/selectorChats";
import { auth, fs } from "../../../services/firebase";
import DialogItem from "./DialogItem/DialogItem";

export default function Dialogs() {
    const dispatch = useDispatch();

    useEffect( () => {
        if ( auth.currentUser ) {
            const unSub = onSnapshot( doc( fs, 'users', auth.currentUser.uid ), ( snapshot ) => {
                const dialogs = [];
                dialogs.push( snapshot.data() )
                console.log( dialogs )
            } )
        }
    }, [] )

    const getDialogs = useCallback( () => getChatsList(), [] );
    const dialogs = useSelector( getDialogs() );


    let list = dialogs.map( ( el, idx ) => <DialogItemMemo key={el.chatId} id={idx} name={el.nameDialog} /> )
    return ( <div>
        <List dense>{list}</List>
    </div> )
}

const DialogItemMemo = React.memo( DialogItem );