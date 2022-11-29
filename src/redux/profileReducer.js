import { SAVE_NEW_NAME, SET_NAME, SET_SHOW_NAME, TOGGLE_NEW_NAME } from "./types"



const initialState = {
    name: 'Name',
    showName: false,
    showFieldInputNewName: false,
}

export const profileReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case SET_SHOW_NAME:
            return {
                ...state,
                showName: !state.showName,
                showFieldInputNewName: false
            }
        case TOGGLE_NEW_NAME:
            return {
                ...state,
                showFieldInputNewName: true
            }
        case SET_NAME:
            return {
                ...state,
                name: action.name
            }
        case SAVE_NEW_NAME:
            return {
                ...state,
                showFieldInputNewName: false
            }
        default:
            return state
    }
}