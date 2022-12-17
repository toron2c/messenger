import { ProfileAboutInputName } from "./PrifleAboutInputName/ProfileAboutInputName"
import { ProfileAboutInputAbout } from "./ProfileAboutInputAbout/ProfileAboutInputAbout"
import { ProfileAboutInputStatus } from "./ProfileAboutInputStatus/ProfileAboutInputStatus"

export const ProfileAboutInputs = () => {

    return (
        <div>
            <ProfileAboutInputName />
            <ProfileAboutInputStatus />
            <ProfileAboutInputAbout />
        </div>
    )
}