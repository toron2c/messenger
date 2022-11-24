import { SAVE_NEW_NAME, SET_NAME, TOGGLE_NEW_NAME } from "../../types"



const initialState = {
    name: 'Name',
    showFieldInputNewName: false,
}

export const profileReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TOGGLE_NEW_NAME:
            return {
                ...state,
                showFieldInputNewName: true
            }
        case SET_NAME:
            return {
                ...state,
                name: action.text
            }
        case SAVE_NEW_NAME:
            return {
                ...state,
                showFieldInputNewName: false,
            }
        default:
            return state
    }
}