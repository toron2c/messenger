import {
    DELETE_DATA_AFTER_LOGOUT,
    INITIALIZE_PROFILE,
    SET_ABOUT_PROFILE,
    SET_ERROR_SAVE_PROFILE_DATA,
    SET_NAME_PROFILE,
    SET_STATUS_PROFILE,
    TOGGLE_PROFILE_EDIT
} from "../../types"



const initialState = {
    email: '',
    name: '',
    uid: '',
    infoUser: {
        status: '',
        about: ''
    },
    isEditProfile: false,
    error: {
        isError: false,
        msg: ''
    }
}

export const profileReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case INITIALIZE_PROFILE: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case TOGGLE_PROFILE_EDIT:
            return {
                ...state,
                isEditProfile: !state.isEditProfile,
                error: {
                    isError: false,
                    msg: ''
                }
            }
        case SET_NAME_PROFILE:
            return {
                ...state,
                name: action.value
            }
        case SET_STATUS_PROFILE:
            return {
                ...state,
                infoUser: {
                    ...state.infoUser,
                    status: action.value
                }
            }
        case SET_ABOUT_PROFILE:
            return {
                ...state,
                infoUser: {
                    ...state.infoUser,
                    about: action.value
                }
            }
        case SET_ERROR_SAVE_PROFILE_DATA: {
            return {
                ...state,
                isEditProfile: false,
                error: {
                    isError: true,
                    msg: action.msg
                }
            }
        }
        case DELETE_DATA_AFTER_LOGOUT: {
            return {
                email: '',
                name: '',
                uid: '',
                infoUser: {
                    status: '',
                    about: ''
                },
                isEditProfile: false,
                error: {
                    isError: false,
                    msg: ''
                }
            }
        }
        default:
            return state
    }
}