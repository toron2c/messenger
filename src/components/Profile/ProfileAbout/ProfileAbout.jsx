import { shallowEqual, useSelector } from 'react-redux'
import { getUserAbout, getUserEmail, getUserName, getUserStatus } from '../../../redux/reducers/profileReducer/selectorProfile'
import { ProfileAboutEmail } from './ProfileAboutEmail/ProfileAboutEmail';
import { ProfileAboutInfo } from './ProfileAboutInfo/ProfileAboutInfo';
import { ProfileAboutName } from './ProfileAboutName/ProfileAboutName';
import { ProfileAboutStatus } from './ProfileAboutStatus/ProfileAboutStatus';

export const ProfileAboutContainer = () => {
    const email = useSelector( getUserEmail(), shallowEqual );
    const name = useSelector( getUserName(), shallowEqual );
    const status = useSelector( getUserStatus(), shallowEqual );
    const about = useSelector( getUserAbout(), shallowEqual );
    return (
        <>
            <ProfileAboutEmail email={email} />
            <ProfileAboutName name={name} />
            <ProfileAboutStatus status={status} />
            <ProfileAboutInfo about={about} />
        </>
    )
}