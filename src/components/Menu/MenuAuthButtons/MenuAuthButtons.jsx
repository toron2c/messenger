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
                <div><Link className={style.link} onClick={onClickLogout}>Выйти</Link></div>
                : <div><Link className={style.link} to='/login'>Войти</Link></div>}
        </>
    )
}

// export default React.memo( MenuAuthButtons )