import { SAVE_NEW_NAME, SET_NAME, SET_SHOW_NAME, TOGGLE_NEW_NAME } from "./types";


export function setShowName() {
    return {
        type: SET_SHOW_NAME
    }
}

export function setToggleNewName() {
    return {
        type: TOGGLE_NEW_NAME
    }
}

export function setName( value ) {
    return {
        type: SET_NAME,
        name: value
    }
}

export function saveName() {
    return {
        type: SAVE_NEW_NAME
    }
}