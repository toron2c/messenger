import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFields, registrationUserWithSaga, setErrorAuth } from '../../../redux/actions'
import { AuthFields } from '../AuthFields/AuthFields'
import style from './Registration.module.scss'

let i = 0;

export const Registration = () => {

    const dispatch = useDispatch();
    const message = useSelector( state => state.auth.error.message );
    console.log( `render registration ${++i}` )

    useEffect( () => {
        if ( message ) {
            dispatch( clearFields() )
        }
    }, [] )


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