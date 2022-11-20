import { combineReducers } from 'redux'
import { profileReducer } from './profileReducer/profileReducer'
import { chatsReducer } from './chatsReducer/chatsReducer'
import { messagesReducer } from './messagesReducer/messagesReducer'

export const rootReducer = combineReducers( {
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer
} )