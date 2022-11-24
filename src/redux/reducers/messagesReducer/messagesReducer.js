import { INPUT_CHAT, SEND_MESSAGE } from "../../types";



const initialState = {
    textNewMessage: '',
    messageList: {
        '1': [],
        '2': [{ text: 'allalal', author: 'user' }, { text: 'allalal', author: 'user' }, { text: 'allalaasdassssssssssl', author: 'bot' }],
        '3': [],
        '4': []
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
        default:
            return state;
    }
}