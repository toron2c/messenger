import { ADD_MESSAGES_TO_STORE, ADD_NEW_ELEMENT_TO_CHAT, ADD_NEW_MESSAGE_TO_STORE, ADD_OLD_MESSAGES_TO_STORE, DELETE_DATA_AFTER_LOGOUT, INPUT_CHAT, REMOVE_CHAT, SEND_MESSAGE, SUBSCRIBE_ON_NEW_MESSAGES_WITH_SAGA, UNSUBSCRIBE_ON_NEW_MESSAGES } from "../../types";



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
                messages: action.messages,
                subscribe: false
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
            let arr = state.messageList[action.uid].messages;
            arr.unshift( ...action.messages )
            // console.log( 'old', state, 'new', state_old );
            // console.log( state.messageList )
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.uid]: {
                        ...state.messageList[action.uid],
                        page: state.messageList[action.uid].page + 1,
                        messages: [
                            ...arr
                        ]
                    }
                }
            }
        }
        case SUBSCRIBE_ON_NEW_MESSAGES_WITH_SAGA: {
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.uid]: {
                        ...state.messageList[action.uid],
                        subscribe: true,
                    }
                }
            }
        }
        case UNSUBSCRIBE_ON_NEW_MESSAGES: {
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.uid]: {
                        ...state.messageList[action.uid],
                        subscribe: false,
                    }
                }
            }
        }
        case ADD_NEW_MESSAGE_TO_STORE: {
            if ( state.messageList[action.uid].messages.find( el => el.idMessage === action.message.idMessage ) ) return state;
            const newArr = state.messageList[action.uid].messages;
            newArr.push( action.message );
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.uid]: {
                        ...state.messageList[action.uid],
                        messages: [
                            ...newArr
                        ]
                    }
                }
            }
        }
        case ADD_NEW_ELEMENT_TO_CHAT: {
            console.log( action );
            return state;
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