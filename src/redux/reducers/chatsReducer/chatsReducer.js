import { ADD_CHAT, ADD_CHAT_TO_STORE, ADD_NEW_ELEMENT_TO_CHAT, CHANGE_NAME_CHAT, DELETE_DATA_AFTER_LOGOUT, REMOVE_CHAT, SET_CLOSED_SUBSCRIBE, SET_SUBSCRIBE_ACTIVE, TOGGLE_NEW_CHAT } from "../../types";


const initialState = {
    toggleNewChat: false,
    nameNewChat: '',
    chatList: [
    ],
    subscribeActived: false
};

export const chatsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TOGGLE_NEW_CHAT:
            return {
                ...state,
                toggleNewChat: true
            }
        case CHANGE_NAME_CHAT:
            return {
                ...state,
                nameNewChat: action.text
            }
        case ADD_CHAT_TO_STORE: {
            return {
                ...state,
                chatList: [...action.payload]
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
            // console.log( action );

            if ( state.chatList.find( el => el.chatId === action.payload.chatId ) ) return state;
            let newElement = {
                ...action.payload,
                linkToDialog: state.chatList.length > 0 ? state.chatList[state.chatList.length - 1].linkToDialog + 1 : 0
            }
            console.log( newElement );
            return {
                ...state,
                chatList: [...state.chatList, newElement]
            }
        }
        case REMOVE_CHAT:
            return {
                ...state,
                chatList: state.chatList.filter( el => el.id !== action.id )
            }
        case DELETE_DATA_AFTER_LOGOUT:
            return {
                toggleNewChat: false,
                nameNewChat: '',
                chatList: [
                ],
                subscribeActived: false
            }
        default:
            return state;
    }
}