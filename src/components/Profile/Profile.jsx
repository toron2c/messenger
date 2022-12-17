import { useDispatch } from 'react-redux'
// import { saveName, setName, setToggleNewName } from '../../redux/actions';
// import { getStatusName } from '../../redux/reducers/profileReducer/selectorProfile';
import { Button } from '@mui/material';
import { shallowEqual, useSelector } from 'react-redux';
import { getStatusToggleEditProfile } from '../../redux/reducers/profileReducer/selectorProfile';
import style from './Profile.module.scss'
import { ProfileAboutContainer } from './ProfileAbout/ProfileAbout';
import { ProfileAboutInputs } from './ProfileAboutInput/ProfileAboutInputs';
import { saveProfileWithSaga, setToggleProfileEdit } from '../../redux/actions';

let i = 0;
export default function Profile() {
    const dispatch = useDispatch();
    // const name = useSelector( state => state.profile.name );
    // const getStatusShowInput = useMemo( () => getStatusName(), [] )
    // const showInputNewName = useSelector( getStatusShowInput, shallowEqual )


    const toggleProfileEditHandler = ( e ) => {
        e.preventDefault();
        dispatch( setToggleProfileEdit() )
    }
    // const onChangeName = ( e ) => {
    //     e.preventDefault();
    //     dispatch( setName( e.target.value ) );

    // }
    const isEditProfiled = useSelector( getStatusToggleEditProfile(), shallowEqual );

    const saveProfileHandler = ( e ) => {
        e.preventDefault();
        dispatch( saveProfileWithSaga() );
    }

    console.log( `render PROFILE ${i++}` )
    return (
        <div className={style.profileBox}>
            <h1 className={style.title}>{!isEditProfiled ? 'Profile' : 'Edit profile'}</h1>
            {!isEditProfiled ?
                <>
                    <Button onClick={toggleProfileEditHandler} className={style.profileBoxButtonEdit}>Edit profile</Button>
                    <ProfileAboutContainer />
                </>
                : <form>
                    <ProfileAboutInputs />
                    <Button onClick={saveProfileHandler} type='submit' className={style.profileBoxButtonEdit}>Save</Button>
                </form>
            }
        </div>
    )
}