import {
    ADD_CHAT_TO_STORE,
    ADD_CHAT_WITH_SAGA,
    ADD_MESSAGES_TO_STORE,
    ADD_NEW_ELEMENT_TO_CHAT,
    ADD_NEW_MESSAGE_TO_STORE,
    ADD_OLD_MESSAGES_TO_STORE,
    AUTHORIZATION_USER,
    CHANGE_NAME_CHAT,
    CLEAR_FIELDS_AUTH,
    DELETE_DATA_AFTER_LOGOUT,
    GET_CHATS_WITH_SAGA,
    GET_INIT_LIST,
    GET_MESSAGES_WITH_SAGA,
    GET_OLD_MESSAGES_WITH_SAGA,
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
    SUBSCRIBE_ON_NEW_MESSAGES_WITH_SAGA,
    TOGGLE_NEW_CHAT,
    TOGGLE_PROFILE_EDIT,
    UNSUBSCRIBE_ON_NEW_MESSAGES
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
 * @param {string} text new value name
 * @returns type: type action, value: new value name 
 */
export function setNameProfile( text ) {
    return {
        type: SET_NAME_PROFILE,
        value: text
    }
}

/**
 * function action change status
 * @param {string} text new value status
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
 * @param {string} text new value about
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
 * @param {array} data - chats array
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
    return { type: SET_SUBSCRIBE_ACTIVE }
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
 * @param {object} element new element chat
 * @returns {*} type: action, payload: new element chat
 */
export function addNewElementChat( element ) {
    return {
        type: ADD_NEW_ELEMENT_TO_CHAT,
        payload: element
    }
}


// old ---- add description
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



// *** Messages ***
/**
 * function action get messages /// p.s. create limit 15
 * @param {string} uidChat id chat in firestore
 * @param {number} linkToDialog link to dialog in app
 * @returns type action, uid: uid chat, link: link to dialog
 */
export function getMessagesWithSaga( uidChat, linkToDialog ) {
    return {
        type: GET_MESSAGES_WITH_SAGA,
        uid: uidChat,
        link: linkToDialog
    }
}
/**
 * function action initialize messages with start messages
 * @param {string} uid uid chat
 * @param {number} link link to chat
 * @param {array} messages array messages
 * @param {number} pageMessages page of messages
 * @returns type action, uid chat, array messages
 */
export function initializeMessagesToStore( uid, link, messages, pageMessage ) {
    return {
        type: ADD_MESSAGES_TO_STORE,
        uid,
        link,
        messages,
        pageMessage
    }
}
/**
 * function action get old messages with saga
 * @param {string} uid chat 
 * @returns 
 */
export function getOldMessagesWithSaga( uid ) {
    return {
        type: GET_OLD_MESSAGES_WITH_SAGA,
        uid
    }
}
/**
 * function action subscribe on new messages activate with saga
 * @param {string} uid 
 * @returns 
 */
export function subscribeOnNewMessages( uid ) {
    return {
        type: SUBSCRIBE_ON_NEW_MESSAGES_WITH_SAGA,
        uid
    }
}
/**
 * function action unsubscribe on new messages
 * @param {string} uid 
 * @returns 
 */
export function unsubscribeOnNewMessages( uid ) {
    return {
        type: UNSUBSCRIBE_ON_NEW_MESSAGES,
        uid
    }
}

export function addNewMessageToStore( uid, message ) {
    return {
        type: ADD_NEW_MESSAGE_TO_STORE,
        uid,
        message
    }
}

/**
 * function action add old messages to store
 * @param {string} uid 
 * @param {array} messages 
 * @returns 
 */
export function addOldMessagesToStore( uid, messages ) {
    return {
        type: ADD_OLD_MESSAGES_TO_STORE,
        uid,
        messages
    }
}


export function sendMessage( id, author ) {
    return {
        type: SEND_MESSAGE,
        id: id,
        author: author
    }
}

/**
 * function action send message with sage
 * @param {string} uid 
 * @returns type action
 */
export function sendMessageWithSaga( uid ) {
    return {
        type: SEND_MESSAGE_WITH_SAGA,
        uid
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

/**
 * functiona ction clear all data after logout
 * @returns {*} {action type};
 */
export function deleteDataAfterLogout() {
    return {
        type: DELETE_DATA_AFTER_LOGOUT
    }
}