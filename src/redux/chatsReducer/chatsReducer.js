import { ADD_CHAT, CHANGE_NAME_CHAT, REMOVE_CHAT, TOGGLE_NEW_CHAT } from "../types";


const initialState = {
    toggleNewChat: false,
    nameNewChat: '',
    chatList: [
        { name: "Your Friend", id: '1' },
        { name: "Your Friend2", id: '2' },
        { name: "Your Friend3", id: '3' },
        { name: "Your Friend5", id: '4' }
    ],
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
        case ADD_CHAT: {
            if ( state.nameNewChat === '' ) {
                return {
                    ...state,
                    toggleNewChat: false
                }
            } else {
                let newId = 1;
                if ( state.chatList.length > 0 ) {
                    newId = Number( state.chatList[state.chatList.length - 1].id ) + 1;
                }
                let newChat = { name: state.nameNewChat, id: newId.toString(), messages: [] };

                return {
                    ...state,
                    nameNewChat: '',
                    toggleNewChat: false,
                    chatList: [...state.chatList, newChat]
                }
            }
        }
        case REMOVE_CHAT:
            return {
                ...state,
                chatList: state.chatList.filter( el => el.id !== action.id )
            }

        default:
            return state;
    }
}