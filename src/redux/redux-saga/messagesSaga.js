import { addDoc, collection, doc, getCountFromServer, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, startAfter } from "firebase/firestore";
import { eventChannel } from "redux-saga";
import { call, delay, put, select, take, takeEvery, takeLatest } from "redux-saga/effects";
import { addNewMessageToStore, addOldMessagesToStore, initializeMessagesToStore } from "../actions";
import { GET_MESSAGES_WITH_SAGA, GET_OLD_MESSAGES_WITH_SAGA, SEND_MESSAGE_WITH_SAGA, SUBSCRIBE_ON_NEW_MESSAGES_WITH_SAGA } from "../types";
import { auth, fs } from './../../services/firebase'


export function* getMessagesFromFirestore( uid, currentPageMessages = 0 ) {
    try {
        let lastVisible, nextQuery;
        let messages = [];
        const q = query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'Timestamp', 'desc' ), limit( 12 ) );
        let querySnapshot = yield getDocs( q );
        while ( currentPageMessages > 0 ) {
            // if ( currentPageMessages > 0 ) {
            lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            nextQuery = yield query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'Timestamp', 'desc' ), limit( 12 ), startAfter( lastVisible ) )
            querySnapshot = yield getDocs( nextQuery )
            // }
            currentPageMessages--;
        }
        querySnapshot.forEach( ( doc ) => {
            messages.unshift( { ...doc.data(), idMessage: doc.id } )
        } );
        for ( let message of messages ) {
            message.Timestamp = new Date( message.Timestamp.seconds * 1000 )
            message.author = message.author === auth.currentUser.uid ? 'you' : 'notYou'
        }
        return messages;
    } catch ( error ) {
        console.error( `error load messages, please contact to administartion (@toron2c)\nmessage: ${error.message}` )
    }
}

// get messages initialization
function* getMessegesWorker( { uid, link } ) {
    try {
        yield delay( 0 );
        // const q = yield query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'Timestamp' ), limit( 12 ) );
        const lastMessages = yield getMessagesFromFirestore( uid )
        // const lastMessages = [];
        // const querySnapshot = yield getDocs( q );
        // querySnapshot.forEach( ( doc ) => {
        // doc.data() is never undefined for query doc snapshots
        // lastMessages.push( doc.data() )
        // } );
        // for ( let message of lastMessages ) {
        // message.Timestamp = new Date( message.Timestamp.seconds * 1000 )
        // message.author = message.author === auth.currentUser.uid ? 'you' : 'notYou'
        // }
        yield put( initializeMessagesToStore( uid, link, lastMessages, 1 ) )
    } catch ( error ) {
        console.error( `error load messages, please contact to administartion (@toron2c)\nmessage: ${error.message}` )
    }
}

function* getOldMessagesWorker( { uid } ) {
    try {
        yield delay( 0 );
        let page = yield select( ( state ) => state.messages.messageList[uid].page );
        let mLength = yield select( state => state.messages.messageList[uid].messages.length );
        const q = query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'Timestamp', 'desc' ) );
        const countMessages = yield getCountFromServer( q );
        if ( mLength === countMessages.data().count ) {
            return;
        }
        let messages = yield getMessagesFromFirestore( uid, page );
        // let page = yield select( ( state ) => ( state.messages.messageList[uid].page++ ))
        //     const q = yield query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'Timestamp' ), limit( 12 ) );
        //     const lastMessages = [];
        //     let doces = yield getDocs( q );
        //     let lastVisible = doces.docs[doces.docs.length - 1]
        //     const nextPage = yield query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'Timestamp' ), limit( 12 ), startAfter( lastVisible ) );
        //     doces = yield getDocs( nextPage );
        //     doces.forEach( ( doc ) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         lastMessages.push( doc.data() )
        //     } );
        //     for ( let message of lastMessages ) {
        //         message.Timestamp = new Date( message.Timestamp.seconds * 1000 )
        //         message.author = message.author === auth.currentUser.uid ? 'you' : 'notYou'
        //     }
        //     console.log( lastMessages );
        //     /*const first = query(collection(db, "cities"), orderBy("population"), limit(25));
        //         const documentSnapshots = await getDocs(first);

        //         // Get the last visible document
        //         const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        //         console.log("last", lastVisible);

        //         // Construct a new query starting at this document,
        //         // get the next 25 cities.
        //         const next = query(collection(db, "cities"),
        //         orderBy("population"),
        //         startAfter(lastVisible),
        //         limit(25));
        // */
        console.log( messages, 'page->', page )
        yield put( addOldMessagesToStore( uid, messages ) )
    } catch ( error ) {
        console.error( `error load messages, please contact to administartion (@toron2c)\nmessage: ${error.message}` )
    }
}

// send message
function* sendMessageWorker( { uid } ) {
    try {
        yield delay( 500 );
        let messageText = yield select( state => state.messages.textNewMessage );
        let newMessage = {
            message: messageText,
            author: auth.currentUser.uid,
            TimestampUser: new Date()
        }
        const refMessage = collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` );
        yield addDoc( refMessage, { ...newMessage, TimestampServer: serverTimestamp() } )
        // yield updateDoc( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), { timestamp: serverTimestamp() } )
    } catch ( e ) {
        console.error( `error send message. please contact to administration (@toron2c)\nmessage: ${e.message}` )
    }
}

// subscribe on new messages
function* subscribeOnNewMessagesWorker( { uid } ) {
    yield delay( 1000 );
    const dialog = yield call( getNewChats, uid )
    try {
        console.log( `subscribe on chat ${uid} active...` )
        while ( yield select( state => state.messages.messageList[uid].subscribe ) ) {
            yield delay( 1000 );
            const message = yield take( dialog );
            if ( yield select( state => state.messages.messageList[uid].subscribe ) ) {
                if ( message ) {
                    console.log( message );
                    yield put( addNewMessageToStore( uid, message ) )
                }
                // console.log( yield select( state => state.messages.messageList[uid] ) )
            } else {
                dialog.close()
            }
        }
        console.log( `subscribe on chat ${uid} unctive...` )
    } catch ( error ) {
        console.error( `error load message! please contact to administration (@toron2c)\n message: ${error.message}` )
    }
}

function getNewChats( uid ) {
    return eventChannel( emitter => {
        const ref = query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'TimestampServer' ) )
        let element;
        let id;
        const subscribeOnMessages = onSnapshot( ref, ( doc ) => {
            doc.docChanges().forEach( change => {
                if ( change.type === 'added' ) {

                    element = change.doc.data();
                    id = change.doc.id;
                    console.log( element );

                }
                if ( element ) {
                    // console.log( element )
                    emitter( { ...element, id } );
                }
            } )


        } )
        // return unsubscribe function
        return () => {
            subscribeOnMessages();
        }
    }
    )
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