import { TextField } from "@mui/material"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setEmail, setErrorAuth, setPass } from "../../../redux/actions";
import { getStatusError } from "../../../redux/reducers/authReducer/selectorAuth";
import style from './AuthFields.module.scss'


export const AuthFields = () => {
    const email = useSelector( state => state.auth.email );
    const pass = useSelector( state => state.auth.pass );
    const dispatch = useDispatch();
    const error = useSelector( getStatusError(), shallowEqual );



    const handlePassChange = ( e ) => {
        e.preventDefault();
        if ( error ) dispatch( setErrorAuth( false, '' ) );
        dispatch( setPass( e.target.value ) );
    };

    const handleEmailChange = ( e ) => {
        e.preventDefault();
        if ( error ) dispatch( setErrorAuth( false, '' ) );
        dispatch( setEmail( e.target.value ) );
    };

    return (
        <form>
            <div className={style.field}><TextField error={error} required style={{ width: '100%' }} type='email' onChange={handleEmailChange} value={email} label="Email" variant="outlined" /></div>
            <div className={style.field}><TextField error={error} required style={{ width: '100%' }} type='password' onChange={handlePassChange} value={pass} label="Password" variant="outlined" /></div>
        </form>
    )
}