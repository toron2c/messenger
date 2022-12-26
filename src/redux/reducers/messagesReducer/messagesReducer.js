import {
    ADD_MESSAGES_TO_STORE,
    ADD_NEW_MESSAGE_TO_STORE,
    ADD_OLD_MESSAGES_TO_STORE,
    DELETE_DATA_AFTER_LOGOUT,
    INPUT_CHAT,
    SEND_MESSAGE,
    // REMOVE_CHAT, unactive
    SUBSCRIBE_ON_NEW_MESSAGES_WITH_SAGA,
    UNSUBSCRIBE_ON_NEW_MESSAGES,
    UPDATES_LAST_MESSAGES_IN_STATE
} from "../../types";



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
            return {
                ...state,
                textNewMessage: ''
            }
        }
        case ADD_MESSAGES_TO_STORE: {
            if ( state.messageList[action.uid]?.messages?.length ) return state;
            let el = {
                link: action.link,
                avatar: action.img,
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
        case UPDATES_LAST_MESSAGES_IN_STATE: {
            let tmpArrMessage = state.messageList[action.uid].messages;
            action.messages.forEach( message => {
                let idx = tmpArrMessage.findIndex( el => el.idMessage === message.idMessage )
                if ( idx === -1 ) {
                    tmpArrMessage.push( message );
                }
            } )
            if ( tmpArrMessage.length === state.messageList[action.uid].messages.length ) return state;
            tmpArrMessage.sort( ( a, b ) => a.TimestampServer.getTime() - b.TimestampServer.getTime() )
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.uid]: {
                        ...state.messageList[action.uid],
                        messages: [...tmpArrMessage]
                    }
                }
            }
        }
        case ADD_OLD_MESSAGES_TO_STORE: {
            let arr = state.messageList[action.uid].messages;
            arr.unshift( ...action.messages )
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
        /*
        ====unactive====
         case REMOVE_CHAT:
             const currentList = state.messageList;
             delete currentList[action.id]
             return {
                 ...state,
                 messageList: {
                     ...currentList
                 }
             } */

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