import { TextField } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setStatusProfile } from '../../../../redux/actions';
import { getUserStatus } from '../../../../redux/reducers/profileReducer/selectorProfile';
import style from './../ProfileAboutInputs.module.scss'


export const ProfileAboutInputStatus = () => {
    const dispatch = useDispatch();
    const status = useSelector( getUserStatus(), shallowEqual )

    const onChangeInputHandler = ( e ) => {
        e.preventDefault();
        dispatch( setStatusProfile( e.target.value ) )
    }

    return (
        <div className={style.containerInput}>
            <p className={style.containerInputTitle}>status:</p>
            <TextField label={'status'} className={style.containerInputValue} fullWidth onChange={onChangeInputHandler} value={status ? status : ''} />
        </div>
    )
}