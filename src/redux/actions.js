import {
    ADD_CHAT,
    CHANGE_NAME_CHAT,
    GET_INIT_LIST,
    INPUT_CHAT,
    REMOVE_CHAT,
    SAVE_NEW_NAME,
    SEND_MESSAGE,
    SEND_MESSAGE_WITH_SAGA,
    SET_ERROR,
    SET_LIST,
    SET_NAME,
    TOGGLE_NEW_CHAT,
    TOGGLE_NEW_NAME
} from "./types";



export function setToggleNewName() {
    return {
        type: TOGGLE_NEW_NAME
    }
}

export function setName( value ) {
    return {
        type: SET_NAME,
        text: value
    }
}

export function saveName() {
    return {
        type: SAVE_NEW_NAME
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

export function addNewChat() {
    return {
        type: ADD_CHAT
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