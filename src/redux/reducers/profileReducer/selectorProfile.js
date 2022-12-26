export function getUserEmail() {
    return ( state ) => state.profile.email
}

export function getUserName() {
    return ( state ) => state.profile.name
}

export function getUserStatus() {
    return ( state ) => state.profile.infoUser.status
}

export function getUserAbout() {
    return ( state ) => state.profile.infoUser.about
}

export function getStatusToggleEditProfile() {
    return ( state ) => state.profile.isEditProfile
}

export function getStatusErrorSaveProfile() {
    return ( state ) => state.profile.error.isError
}

export function getErrorMessageSaveProfile() {
    return ( state ) => state.profile.error.msg
}

export function getUserAvatar() {
    return ( state ) => state.profile.avatar;
}