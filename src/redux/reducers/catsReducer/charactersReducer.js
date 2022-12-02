import { SET_ERROR, SET_LIST } from "../../types";

const initialState = {
    info: {
        prev: '',
        next: ''
    },
    list: [],
    err: {
        errMessage: null,
        errPage: null
    }
}


export const characterReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case SET_LIST: {
            return {
                ...action.payload,
                err: {
                    errMessage: null,
                    errPage: null
                }
            }
        }
        case SET_ERROR:
            return {
                ...state,
                list: [],
                err: {
                    errMessage: action.payload.message,
                    errPage: action.payload.page
                }
            }
        default:
            return state;
    }
}