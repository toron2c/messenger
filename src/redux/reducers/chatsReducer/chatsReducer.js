import {
    ADD_CHAT_TO_STORE,
    ADD_NEW_ELEMENT_TO_CHAT,
    CHANGE_NAME_CHAT,
    DELETE_DATA_AFTER_LOGOUT,
    SET_ADDED_CHAT_ERROR,
    // REMOVE_CHAT,
    SET_CLOSED_SUBSCRIBE,
    SET_SUBSCRIBE_ACTIVE,
    TOGGLE_NEW_CHAT
} from "../../types";


const initialState = {
    toggleNewChat: false,
    nameNewChat: '',
    chatList: [
    ],
    subscribeActived: false,
    error: {
        isError: false,
        msg: '',
    }
};

export const chatsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TOGGLE_NEW_CHAT:
            return {
                ...state,
                toggleNewChat: !state.toggleNewChat,
                error: {
                    isError: false,
                    msg: ''
                }
            }
        case CHANGE_NAME_CHAT:
            return {
                ...state,
                nameNewChat: action.text
            }
        case ADD_CHAT_TO_STORE: {
            return {
                ...state,
                chatList: [...action.payload],

            }
        }
        case SET_SUBSCRIBE_ACTIVE: {
            return {
                ...state,
                subscribeActived: true
            }
        }
        case SET_CLOSED_SUBSCRIBE: {
            return {
                ...state,
                subscribeActived: false
            }
        }
        case ADD_NEW_ELEMENT_TO_CHAT: {
            if ( state.chatList.find( el => el.chatId === action.payload.chatId ) ) return state;
            let newElement = {
                ...action.payload,
                linkToDialog: state.chatList.length > 0 ? state.chatList[state.chatList.length - 1].linkToDialog + 1 : 0
            }
            return {
                ...state,
                toggleNewChat: false,
                chatList: [...state.chatList, newElement]
            }
        }
        /*
        ==unactive==
        case REMOVE_CHAT:
            return {
                ...state,
                chatList: state.chatList.filter( el => el.id !== action.id )
            }
        */
        case SET_ADDED_CHAT_ERROR: {
            return {
                ...state,
                error: {
                    isError: true,
                    msg: action.msg
                }
            }
        }
        case DELETE_DATA_AFTER_LOGOUT:
            return {
                toggleNewChat: false,
                nameNewChat: '',
                chatList: [
                ],
                subscribeActived: false,
                error: {
                    isError: false,
                    msg: '',
                }
            }
        default:
            return state;
    }
}