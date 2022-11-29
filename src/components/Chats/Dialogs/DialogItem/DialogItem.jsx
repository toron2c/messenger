import { Button, ListItem } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './DialogItem.module.scss'


export default function DialogItem( { id, name, removeDialog } ) {
    let [visibleButton, setVisibleButton] = useState( false );

    const removeButtonHandler = ( e ) => {
        e.preventDefault();
        removeDialog( id );
    }

    return ( <div className={styles.list}>
        <ListItem
            onMouseEnter={() => setVisibleButton( true )}
            onMouseLeave={() => setVisibleButton( false )}
            className={styles.item} disablePadding key={id} alignItems="flex-start">
            <NavLink className={( { isActive } ) => isActive ? styles.activeDialog : styles.buttonChat} to={`${id}`}>{name}</NavLink>
            {visibleButton && <Button onClick={removeButtonHandler} className={styles.removeButton}>X</Button>}
        </ListItem>
    </div> )
}