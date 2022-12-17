import { CLEAR_FIELDS_AUTH, LOGOUT_AUTH, SET_EMAIL, SET_ERROR_AUTH, SET_PASSWORD, SET_STATUS_AUTH } from "../../types";


const initialState = {
    email: '',
    pass: '',
    isAuth: false,
    error: {
        isError: false,
        message: ''
    }
};

export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case SET_EMAIL: {
            return {
                ...state,
                email: action.value
            }
        }

        case SET_PASSWORD: {
            return {
                ...state,
                pass: action.value
            }
        }
        case SET_STATUS_AUTH: {
            return {
                ...state,
                isAuth: action.status
            }
        }
        case SET_ERROR_AUTH: {
            return {
                ...state,
                error: {
                    isError: action.payload.status,
                    message: action.payload.message
                }
            }
        }
        case CLEAR_FIELDS_AUTH: {
            return {
                email: '',
                pass: '',
                isAuth: state.isAuth,
                error: {
                    isError: false,
                    message: ''
                }
            }
        }
        case LOGOUT_AUTH: {
            return {
                ...state,
                isAuth: false
            }
        }

        default: return state;
    }
}