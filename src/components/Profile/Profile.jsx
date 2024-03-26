import { useDispatch } from 'react-redux'
import { shallowEqual, useSelector } from 'react-redux';
import { getErrorMessageSaveProfile, getStatusErrorSaveProfile, getStatusToggleEditProfile } from '../../redux/reducers/profileReducer/selectorProfile';
import style from './Profile.module.scss'
import { ProfileAboutContainer } from './ProfileAbout/ProfileAbout';
import { ProfileAboutInputs } from './ProfileAboutInput/ProfileAboutInputs';
import { saveProfileWithSaga, setToggleProfileEdit } from '../../redux/actions';

export default function Profile() {
    const dispatch = useDispatch();

    const toggleProfileEditHandler = ( e ) => {
        e.preventDefault();
        dispatch( setToggleProfileEdit() )
    }

    const isEditProfiled = useSelector( getStatusToggleEditProfile(), shallowEqual );
    const isError = useSelector( getStatusErrorSaveProfile(), shallowEqual )
    const errorMessage = useSelector( getErrorMessageSaveProfile(), shallowEqual );

    const saveProfileHandler = ( e ) => {
        e.preventDefault();
        dispatch( saveProfileWithSaga() );
    }
 
    return (
        <div className={style.profileBox}>
            <h1 className={style.title}>{!isEditProfiled ? 'Profile' : 'Edit profile'}</h1>
            {!isEditProfiled ?
                <>
                    <button onClick={toggleProfileEditHandler} className={style.profileBoxButtonEdit}>Edit profile</button>
                    {isError && <div className={style.error}>{errorMessage}</div>}
                    <ProfileAboutContainer />
                </>
                : <form>
                    <ProfileAboutInputs />
                    <button onClick={saveProfileHandler} type='submit' className={style.profileBoxButtonEdit}>Save</button>
                </form>
            }
        </div>
    )
}