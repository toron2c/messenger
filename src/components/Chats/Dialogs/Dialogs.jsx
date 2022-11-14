import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.scss'



export default function Dialogs() {
    const [chatList, setChatList] = useState( [] );
    useEffect( () => {
        setChatList( [{ name: "Your Friend", id: 17155 }, { name: "Your Friend2", id: 171553 }, { name: "Your Friend3", id: 171554 }, { name: "Your Friend5", id: 171558 }] )
    }, [] )
    let list = chatList.map( el => <ListItem className={styles.item} disablePadding key={el.id} alignItems="flex-start" ><ListItemButton><ListItemText><Typography variant="h5">{el.name}</Typography></ListItemText></ListItemButton></ListItem> )
    return ( <div>
        <List dense>{list}</List>
    </div> )
}