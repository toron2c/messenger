import { INPUT_CHAT, SEND_MESSAGE, SEND_MESSAGE_BOT } from "../types";



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
            const currentList = state.messageList[action.idChat] || [];
            const message = state.textNewMessage;
            return {
                ...state,
                textNewMessage: '',
                messageList: {
                    ...state.messageList,
                    [action.idChat]: [
                        ...currentList,
                        { text: message, author: 'user' }
                    ]
                }
            }
        }
        case SEND_MESSAGE_BOT:
            const currentList = state.messageList[action.idChat];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.idChat]: [
                        ...currentList,
                        { text: `Я всего лишь бот, который умеет писать только это сообщение :'(`, author: 'bot' }
                    ]
                }
            }
        default:
            return state;
    }
}