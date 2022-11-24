import { profileReducer } from './profileReducer/profileReducer'
import { chatsReducer } from './chatsReducer/chatsReducer'
import { messagesReducer } from './messagesReducer/messagesReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers( {
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer
} )
