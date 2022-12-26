import { TextField } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setAboutProfile } from '../../../../redux/actions';
import { getUserAbout } from '../../../../redux/reducers/profileReducer/selectorProfile';
import style from './../ProfileAboutInputs.module.scss'


export const ProfileAboutInputAbout = () => {
    const dispatch = useDispatch();
    const about = useSelector( getUserAbout(), shallowEqual )

    const onChangeInputHandler = ( e ) => {
        e.preventDefault();
        dispatch( setAboutProfile( e.target.value ) )
    }

    return (
        <div className={style.containerInput}>
            <p className={style.containerInputTitle}>about:</p>
            <TextField label='about' className={style.containerInputValue} fullWidth rows={12} onChange={onChangeInputHandler} multiline value={about ? about : ''} />
        </div>
    )
}