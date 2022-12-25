import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setNameProfile } from '../../../../redux/actions';
import { getUserName } from '../../../../redux/reducers/profileReducer/selectorProfile';
import style from './../ProfileAboutInputs.module.scss'

let i = 0;

export const ProfileAboutInputName = () => {
    const name = useSelector( getUserName() )
    const dispatch = useDispatch();
    console.log( `render PROFILE ABOUT INPUT NAME ${i++}` )

    const onChangeInputHandler = ( e ) => {
        e.preventDefault();
        dispatch( setNameProfile( e.target.value ) )
    }

    return (
        <div className={style.containerInput}>
            <p className={style.containerInputTitle}>name:</p>
            <TextField required label='name' className={style.containerInputValue} fullWidth onChange={onChangeInputHandler} value={name ? name : ''} />
        </div>
    )
}