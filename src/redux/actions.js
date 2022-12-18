import {
    ADD_CHAT_TO_STORE,
    ADD_CHAT_WITH_SAGA,
    ADD_NEW_ELEMENT_TO_CHAT,
    AUTHORIZATION_USER,
    CHANGE_NAME_CHAT,
    CLEAR_FIELDS_AUTH,
    DELETE_DATA_AFTER_LOGOUT,
    GET_CHATS_WITH_SAGA,
    GET_INIT_LIST,
    INITIALIZE_PROFILE,
    INPUT_CHAT,
    LOGOUT_AUTH,
    LOGOUT_AUTH_WITH_SAGA,
    REGISTRATION_USER,
    REMOVE_CHAT,
    SAVE_PROFILE_WITH_SAGA,
    SEND_MESSAGE,
    SEND_MESSAGE_WITH_SAGA,
    SET_ABOUT_PROFILE,
    SET_CLOSED_SUBSCRIBE,
    SET_EMAIL,
    SET_ERROR,
    SET_ERROR_AUTH,
    SET_LIST,
    SET_NAME_PROFILE,
    SET_PASSWORD,
    SET_STATUS_AUTH,
    SET_STATUS_PROFILE,
    SET_SUBSCRIBE_ACTIVE,
    TOGGLE_NEW_CHAT,
    TOGGLE_PROFILE_EDIT
} from "./types";



// *** PROFILE ***

/**
 * function action toggle visible  input new name
 * @returns type: action
 */
export function setToggleProfileEdit() {
    return {
        type: TOGGLE_PROFILE_EDIT
    }
}

/**
 * function action change name
 * @param {*} text new value name
 * @returns {type: type action, value: new value name} 
 */
export function setNameProfile( text ) {
    return {
        type: SET_NAME_PROFILE,
        value: text
    }
}

/**
 * function action change status
 * @param {*} text new value status
 * @returns {type: type action, value: new value status} 
 */
export function setStatusProfile( text ) {
    return {
        type: SET_STATUS_PROFILE,
        value: text
    }
}

/**
 * function action change about
 * @param {*} text new value about
 * @returns {type: type action, value: new value status} 
 */
export function setAboutProfile( text ) {
    return {
        type: SET_ABOUT_PROFILE,
        value: text
    }
}

/**
 * function action save profile
 * @returns {type: type action}
 */
export function saveProfileWithSaga() {
    return { type: SAVE_PROFILE_WITH_SAGA }
}


// *** CHATS ***
/**
 * function action get chats user
 * @return {type: type action}
 */
export function getChatsWithSaga() {
    return { type: GET_CHATS_WITH_SAGA }
}
/**
 * function action put chats to state
 * @param {*} data - chats array
 * @returns {*} {type: action, payload: chats array}
 */
export function addChatToStore( data ) {
    return {
        type: ADD_CHAT_TO_STORE,
        payload: data
    }
}
/**
 * function set status subscribe
 * @returns {*} type: action
 */
export function setSubscribeOnNewChats() {
    return { type: SET_SUBSCRIBE_ACTIVE, }
}

/**
 * function set status subscribe
 * @returns {*} type: action
 */
export function closedSubscribeOnNewChats() {
    return { type: SET_CLOSED_SUBSCRIBE }
}
/**
 * function action add new element chat
 * @param {*} element new element chat
 * @returns {*} type: action, payload: new element chat
 */
export function addNewElementChat( element ) {
    return {
        type: ADD_NEW_ELEMENT_TO_CHAT,
        payload: element
    }
}

export function toggleNewChatInput() {
    return {
        type: TOGGLE_NEW_CHAT
    }
}

export function changeNameNewChat( value ) {
    return {
        type: CHANGE_NAME_CHAT,
        text: value
    }
}

/**
 * function action create new chat
 * @returns {type: action.type}
 */
export function addNewChat() {
    return {
        type: ADD_CHAT_WITH_SAGA
    }
}

export function removeChat( id ) {
    return {
        type: REMOVE_CHAT,
        id: id
    }
}

export function inputChat( value ) {
    return {
        type: INPUT_CHAT,
        text: value
    }
}







export function sendMessage( id, author ) {
    return {
        type: SEND_MESSAGE,
        id: id,
        author: author
    }
}

export function sendMessageWithSage( id, author ) {
    return {
        type: SEND_MESSAGE_WITH_SAGA,
        id: id,
        author: author
    }
}

export function getListCharacters( page = 1 ) {
    return {
        type: GET_INIT_LIST,
        page: page
    }
}

export function setList( payload ) {
    return {
        type: SET_LIST,
        payload
    }
}

export function setError( error, page ) {
    return {
        type: SET_ERROR,
        payload: {
            message: error,
            page: page
        }
    }
}

export function setEmail( value ) {
    return {
        type: SET_EMAIL,
        value
    }
}

export function setPass( value ) {
    return {
        type: SET_PASSWORD,
        value
    }
}


export function registrationUserWithSaga() {
    return {
        type: REGISTRATION_USER
    }
}

export function authUserWithSaga() {
    return {
        type: AUTHORIZATION_USER
    }
}

export function setStatusAuth( status ) {
    return {
        type: SET_STATUS_AUTH,
        status
    }
}

export function setErrorAuth( status, message ) {
    return {
        type: SET_ERROR_AUTH,
        payload: {
            status,
            message
        }
    }
}
export function clearFields() {
    return {
        type: CLEAR_FIELDS_AUTH
    }
}


export function logoutAuth() {
    return {
        type: LOGOUT_AUTH
    }
}

/**
 * function action initialize profile after auth
 * @returns { type: typeAction, payload: dataProfile
 * }
 */
export function initializeProfile( data ) {
    return {
        type: INITIALIZE_PROFILE,
        payload: data
    }
}

/**
 * function action, logout with auth
 * @returns {*} type action
 */
export function logoutAuthWithSaga() {
    return {
        type: LOGOUT_AUTH_WITH_SAGA
    }
}

export function deleteDataAfterLogout() {
    return {
        type: DELETE_DATA_AFTER_LOGOUT
    }
}