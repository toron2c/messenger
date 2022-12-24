import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFields, registrationUserWithSaga } from '../../../redux/actions'
import { AuthFields } from '../AuthFields/AuthFields'
import style from './Registration.module.scss'


export const Registration = () => {

    const dispatch = useDispatch();
    const message = useSelector( state => state.auth.error.message );

    useEffect( () => {
        if ( message ) {
            dispatch( clearFields() )
        }
    }, [message, dispatch] )


    const onSubmitHandlerRegistration = ( e ) => {
        e.preventDefault();
        dispatch( registrationUserWithSaga() );
    }


    return (
        <>
            <div className={style.registrationTitle}>
                sign up to chat
            </div>
            <AuthFields />
            {message && <div className={style.error}>{message}</div>}
            <div className={style.registrationButton}>
                <Button onClick={onSubmitHandlerRegistration} variant="contained" style={{ display: 'block' }}>Sign In</Button>
            </div>
        </>
    )
}