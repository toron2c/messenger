export function getUserEmail() {
    console.log( `getUserEmail render` )
    return ( state ) => state.profile.email
}

export function getUserName() {
    console.log( `getUserName render` )
    return ( state ) => state.profile.name
}

export function getUserStatus() {
    console.log( `getUserStatus render` )
    return ( state ) => state.profile.infoUser.status
}

export function getUserAbout() {
    console.log( `getUserAbout render` )
    return ( state ) => state.profile.infoUser.about
}

export function getStatusToggleEditProfile() {
    console.log( `getStatusToggle render` )
    return ( state ) => state.profile.isEditProfile
}