import { profileReducer } from './profileReducer/profileReducer'
import { chatsReducer } from './chatsReducer/chatsReducer'
import { messagesReducer } from './messagesReducer/messagesReducer'
import { combineReducers } from 'redux'
import { characterReducer } from './catsReducer/charactersReducer'
import { authReducer } from './authReducer/authReducer'

export const rootReducer = combineReducers( {
    auth: authReducer,
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    characters: characterReducer
} )
