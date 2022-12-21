import { ADD_MESSAGES_TO_STORE, ADD_OLD_MESSAGES_TO_STORE, DELETE_DATA_AFTER_LOGOUT, INPUT_CHAT, REMOVE_CHAT, SEND_MESSAGE } from "../../types";



const initialState = {
    textNewMessage: '',
    messageList: {
    },
}

export const messagesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case INPUT_CHAT:
            return {
                ...state,
                textNewMessage: action.text
            }
        case SEND_MESSAGE: {
            if ( action.author === 'user' ) {
                const currentList = state.messageList[action.id] || [];
                const message = state.textNewMessage;
                return {
                    ...state,
                    textNewMessage: '',
                    messageList: {
                        ...state.messageList,
                        [action.id]: [
                            ...currentList,
                            { text: message, author: action.author }
                        ]
                    }
                }
            } else {
                const currentList = state.messageList[action.id];
                return {
                    ...state,
                    messageList: {
                        ...state.messageList,
                        [action.id]: [
                            ...currentList,
                            { text: `Я всего лишь бот, который умеет писать только это сообщение :'(`, author: action.author }
                        ]
                    }
                }
            }
        }
        case ADD_MESSAGES_TO_STORE: {
            let el = {
                link: action.link,
                page: action.pageMessage,
                messages: action.messages
            }
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.uid]: el
                },

            }
        }
        case ADD_OLD_MESSAGES_TO_STORE: {
            let element = {
                ...state.messageList[action.uid]
            }
            element.page++;
            element.messages.unshift( ...action.messages );
            // console.log( state.messageList )
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.uid]: { ...element }
                }
            }
        }
        case REMOVE_CHAT:
            const currentList = state.messageList;
            delete currentList[action.id]
            return {
                ...state,
                messageList: {
                    ...currentList
                }
            }
        case DELETE_DATA_AFTER_LOGOUT: {
            return {
                textNewMessage: '',
                messageList: {},
            }
        }
        default:
            return state;
    }
}