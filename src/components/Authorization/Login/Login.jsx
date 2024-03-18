import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { authUserWithSaga, clearFields } from "../../../redux/actions";
import { AuthFields } from "../AuthFields/AuthFields";
import style from './Login.module.scss'

export default function Login() {
    const dispatch = useDispatch();

    const message = useSelector( state => state.auth.error.message, shallowEqual );

    useEffect( () => {

        dispatch( clearFields() )

    }, [dispatch] )

    const onSubmitHandlerAuth = ( e ) => {
        e.preventDefault();
        dispatch( authUserWithSaga() );
    }


    return (
        <>
            <div className={style.loginTitle}>
               авторизоваться
            </div>
            <AuthFields />
            {message && <div className={style.error}>{message}</div>}
            <div className={style.buttonLogin}>
                <button type="submit" onClick={onSubmitHandlerAuth}>Sign In</button>
            </div>
        </>
    )
}