import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFields, registrationUserWithSaga } from '../../../redux/actions'
import { AuthFields } from '../AuthFields/AuthFields'
import style from './Registration.module.scss'

export const Registration = () => {
    const dispatch = useDispatch();
    const message = useSelector( state => state.auth.error.message, ( prev, next ) => prev.value !== next.value );

    useEffect( () => {
        dispatch( clearFields() )
    }, [dispatch] )


    const onSubmitHandlerRegistration = ( e ) => {
        e.preventDefault();
        dispatch( registrationUserWithSaga() );
    }


    return (
        <>
            <div className={style.registrationTitle}>
                зарегистрироваться
            </div>
            <AuthFields />
            {message && <div className={style.error}>{message}</div>}
            <div className={style.registrationButton}>
                <button onClick={onSubmitHandlerRegistration}>Sign In</button>
            </div>
        </>
    )
}