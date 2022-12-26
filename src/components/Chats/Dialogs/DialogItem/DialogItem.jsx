import { ListItem } from "@mui/material";
import React from "react";
// import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './DialogItem.module.scss'
// import DialogItemButtonRemove from "./DialogItemButtonRemove/DialogItemButtonRemove";

/*

Added remove dialog
*/

export default function DialogItem( { id, name, avatar } ) {
    // let [visibleButton, setVisibleButton] = useState( false );
    return ( <>
        <ListItem
            className={styles.item}
            // onMouseEnter={() => setVisibleButton( true )}
            // onMouseLeave={() => setVisibleButton( false )}
            disablePadding alignItems="flex-start">
            <div className={styles.itemName} >
                {avatar && <div><img className={styles.avatar} src={avatar} width='24' heigth='24' alt={'profile avatar'} /></div>}
                <div className={styles.itemBox}><NavLink className={( { isActive } ) => isActive ? styles.activeDialog : styles.buttonChat} to={`${id}`}>{name}</NavLink></div>
                {/* {visibleButton && <DialogItemButtonRemove id={id} />} */}
            </div>
        </ListItem>
    </> )
}
