
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
        <>
            <label htmlFor="email" className={style.field}><span>Email</span><input id="email" name="email" type="email" placeholder="mail@yandex.com" className={style.field__input} onChange={handleEmailChange} value={email}/></label>
            <label htmlFor="password" className={style.field}><span>Password</span><input id="password" type="password" name="password" className={style.field__input} onChange={handlePassChange} value={pass} /></label>
        </>
    )
}