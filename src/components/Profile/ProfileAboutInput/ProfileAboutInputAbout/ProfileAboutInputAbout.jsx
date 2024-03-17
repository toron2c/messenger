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
            <input className={style.containerInputValue} onChange={onChangeInputHandler} value={about ? about : ''} />
        </div>
    )
}