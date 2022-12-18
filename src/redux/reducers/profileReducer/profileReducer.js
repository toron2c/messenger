import { DELETE_DATA_AFTER_LOGOUT, INITIALIZE_PROFILE, SET_ABOUT_PROFILE, SET_NAME_PROFILE, SET_STATUS_PROFILE, TOGGLE_PROFILE_EDIT } from "../../types"



const initialState = {
    email: '',
    name: '',
    uid: '',
    infoUser: {
        status: '',
        about: ''
    },
    isEditProfile: false
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
                isEditProfile: !state.isEditProfile
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
        case DELETE_DATA_AFTER_LOGOUT: {
            return {
                email: '',
                name: '',
                uid: '',
                infoUser: {
                    status: '',
                    about: ''
                },
                isEditProfile: false
            }
        }
        default:
            return state
    }
}