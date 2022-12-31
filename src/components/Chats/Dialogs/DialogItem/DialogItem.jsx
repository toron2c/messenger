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
    return ( <li className={styles.item}>

        {/* // onMouseEnter={() => setVisibleButton( true )} */}
        {/* // onMouseLeave={() => setVisibleButton( false )} */}
        <NavLink className={( { isActive } ) => isActive ? styles.activeDialog : styles.unActiveDialog} to={`${id}`}>
            {avatar && <div><img className={styles.avatar} src={avatar} width='24' heigth='24' alt={'profile avatar'} /></div>}
            <p>{name}</p>
        </NavLink>
        {/* {visibleButton && <DialogItemButtonRemove id={id} />} */}
    </li> )
}
