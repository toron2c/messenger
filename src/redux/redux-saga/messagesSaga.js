import { addDoc, collection, doc, getCountFromServer, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, startAfter } from "firebase/firestore";
import { eventChannel } from "redux-saga";
import { call, delay, put, select, take, takeEvery, takeLatest } from "redux-saga/effects";
import { addNewMessageToStore, addOldMessagesToStore, initializeMessagesToStore, updateLastMessageInState } from "../actions";
import { GET_MESSAGES_WITH_SAGA, GET_OLD_MESSAGES_WITH_SAGA, SEND_MESSAGE_WITH_SAGA, SUBSCRIBE_ON_NEW_MESSAGES_WITH_SAGA, UPDATE_LAST_MESSAGES_WITH_SAGA } from "../types";
import { auth, fs } from './../../services/firebase'

/**
 * function gen get messages form firestore
 * @param {string} uidChat
 * @param {number} currentPageMessages how many pages to take 
 * @returns 
 */
export function* getMessagesFromFirestore( uid, currentPageMessages = 0 ) {
    try {
        // define variables for next query
        let lastVisible, nextQuery;
        // array messages
        let messages = [];
        // first query
        const q = query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'TimestampServer', 'desc' ), limit( 30 ) );
        // get first query data
        let querySnapshot = yield getDocs( q );
        // if this is not first query 
        while ( currentPageMessages > 0 ) {
            // create link on old query
            lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            // create new query with data after old query
            nextQuery = yield query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'TimestampServer', 'desc' ), limit( 12 ), startAfter( lastVisible ) )
            // get data 
            querySnapshot = yield getDocs( nextQuery )
            // minus count passed page
            currentPageMessages--;
        }
        // get messages
        querySnapshot.forEach( ( doc ) => {
            messages.unshift( { ...doc.data(), idMessage: doc.id } )
        } );
        // create correct object message
        for ( let message of messages ) {
            message.TimestampServer = new Date( message.TimestampServer.seconds * 1000 )
            delete message.TimestampUser
            message.author = message.author === auth.currentUser.uid ? 'you' : 'notYou'
        }
        // return messages
        return messages;
    } catch ( error ) {
        console.error( `error load messages, please contact to administartion (@toron2c)\nmessage: ${error.message}` )
    }
}

/**
 * function gen initializate messages
 * @param {payload} uidChat, link 
 */
function* getMessegesWorker( { uid, link } ) {
    try {
        // get messages from firestore
        const lastMessages = yield getMessagesFromFirestore( uid )
        // put messages to state
        yield put( initializeMessagesToStore( uid, link, lastMessages, 1 ) )
    } catch ( error ) {
        console.error( `error load messages, please contact to administartion (@toron2c)\nmessage: ${error.message}` )
    }
}

/**
 * function gen get old messages
 * @param {*} uidChat
 * @returns 
 */
function* getOldMessagesWorker( { uid } ) {
    try {
        // get count message pages from state
        let page = yield select( ( state ) => state.messages.messageList[uid].page );
        // get count messages from state 
        let mLength = yield select( state => state.messages.messageList[uid].messages.length );
        // get query for chat with count messages
        const q = query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'TimestampServer', 'desc' ) );
        const countMessages = yield getCountFromServer( q );
        // if count messages is equal return
        if ( mLength === countMessages.data().count ) {
            return;
        }
        // or get new old messages
        let messages = yield getMessagesFromFirestore( uid, page );
        // put messages to state
        yield put( addOldMessagesToStore( uid, messages ) )
    } catch ( error ) {
        console.error( `error load messages, please contact to administartion (@toron2c)\nmessage: ${error.message}` )
    }
}

// send message
function* sendMessageWorker( { uid } ) {
    try {
        yield delay( 500 );
        // get text messages
        let messageText = yield select( state => state.messages.textNewMessage );
        // create correct object message
        let newMessage = {
            message: messageText,
            author: auth.currentUser.uid,
            TimestampUser: new Date()
        }
        // get ref for a new message
        const refMessage = collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` );
        // update message with timestampserver
        yield addDoc( refMessage, { ...newMessage, TimestampServer: serverTimestamp() } )
    } catch ( e ) {
        console.error( `error send message. please contact to administration (@toron2c)\nmessage: ${e.message}` )
    }
}

// subscribe on new messages
function* subscribeOnNewMessagesWorker( { uid } ) {
    yield delay( 1000 );
    // call function eventChannel with uid chat
    const dialog = yield call( getNewMessage, uid )
    try {
        // while subscirbe actived 
        while ( yield select( state => state.messages.messageList[uid].subscribe ) ) {
            yield delay( 1000 );
            // take new messages
            const message = yield take( dialog );
            // check isSubscibe ?
            if ( yield select( state => state.messages.messageList[uid].subscribe ) ) {
                // if message = true?
                if ( message ) {
                    // create correct message
                    let correctMessage = {
                        TimeStamp: message.TimestampServer ? new Date( message.TimestampServer.seconds * 1000 ) : new Date( message.TimestampUser.seconds * 1000 ),
                        author: message.author === auth.currentUser.uid ? 'you' : 'notYou',
                        message: message.message,
                        idMessage: message.id
                    }
                    // put new message to state
                    yield put( addNewMessageToStore( uid, correctMessage ) )
                }
            } else {
                // if subscribe false, close eventChannel
                dialog.close()
            }
        }
    } catch ( error ) {
        console.error( `error load message! please contact to administration (@toron2c)\n message: ${error.message}` )
    }
}

// function eventChannel get new messages
function getNewMessage( uid ) {
    return eventChannel( emitter => {
        const ref = query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'TimestampServer' ) )
        let element;
        let id;
        const subscribeOnMessages = onSnapshot( ref, ( doc ) => {
            doc.docChanges().forEach( change => {
                if ( change.type === 'added' ) {
                    element = change.doc.data();
                    id = change.doc.id;
                }
                if ( element ) {
                    emitter( { ...element, id } );
                }
            } )


        } )
        return () => {
            subscribeOnMessages();
        }
    }
    )
}

// update last messages
function* updateLastMessagesWorker( { uid } ) {
    try {
        // get last 30 messages
        const lastUpdatesMessages = yield getMessagesFromFirestore( uid );
        // put messages to state
        yield put( updateLastMessageInState( uid, lastUpdatesMessages ) );
    } catch ( error ) {
        console.error( `Error load messages! please contact to administration (@toron2c)!\nMessage:${error.message}` )
    }
}

export function* getMessagesWatcher() {
    yield takeEvery( GET_MESSAGES_WITH_SAGA, getMessegesWorker )
}

export function* getOldMessagesWatcher() {
    yield takeEvery( GET_OLD_MESSAGES_WITH_SAGA, getOldMessagesWorker )
}


export function* sendMessageWatcher() {
    yield takeEvery( SEND_MESSAGE_WITH_SAGA, sendMessageWorker )
}

export function* subscribeOnNewMessagesWatcher() {
    yield takeLatest( SUBSCRIBE_ON_NEW_MESSAGES_WITH_SAGA, subscribeOnNewMessagesWorker )
}

export function* updateLastMessagesWatcher() {
    yield takeLatest( UPDATE_LAST_MESSAGES_WITH_SAGA, updateLastMessagesWorker )
}