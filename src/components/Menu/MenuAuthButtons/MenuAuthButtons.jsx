import React from "react"
import { useDispatch } from "react-redux";
import { Link, redirect } from "react-router-dom"
import { logoutAuthWithSaga } from "../../../redux/actions";
import style from '../Menu.module.scss'


export default function MenuAuthButtons( { isAuth } ) {
    const dispatch = useDispatch();
    const onClickLogout = ( e ) => {
        e.preventDefault();
        dispatch( logoutAuthWithSaga() );
        redirect( '/' );
    }
    return (
        <>
            {isAuth ?
                <Link className={style.authButton} onClick={onClickLogout}>logout</Link>
                : <Link className={style.authButton} to='/login'>login</Link>}
        </>
    )
}

// export default React.memo( MenuAuthButtons )