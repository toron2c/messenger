import { addDoc, collection, doc, endAt, getDocs, limit, orderBy, query, serverTimestamp, startAfter, startAt } from "firebase/firestore";
import { delay, put, select, takeEvery } from "redux-saga/effects";
import { addOldMessagesToStore, initializeMessagesToStore } from "../actions";
import { GET_MESSAGES_WITH_SAGA, GET_OLD_MESSAGES_WITH_SAGA, SEND_MESSAGE_WITH_SAGA } from "../types";
import { auth, fs } from './../../services/firebase'


function* getMessagesFromFirestore( uid, currentPageMessages = 0 ) {
    try {
        let lastVisible, nextQuery;
        let messages = [];
        const q = query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'Timestamp', 'desc' ), limit( 12 ) );
        let querySnapshot = yield getDocs( q );
        while ( currentPageMessages > 0 ) {
            if ( currentPageMessages > 0 ) {
                lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
                nextQuery = yield query( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), orderBy( 'Timestamp', 'desc' ), limit( 12 ), startAfter( lastVisible ) )
                querySnapshot = yield getDocs( nextQuery )
            }
            currentPageMessages--;
        }
        querySnapshot.forEach( ( doc ) => {
            messages.unshift( doc.data() )
        } );
        for ( let message of messages ) {
            message.Timestamp = new Date( message.Timestamp.seconds * 1000 )
            message.author = message.author === auth.currentUser.uid ? 'you' : 'notYou'
        }
        console.log( messages );
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
        }
        const refMessage = collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` );
        yield addDoc( refMessage, { ...newMessage, Timestamp: serverTimestamp() } )
        // yield updateDoc( collection( doc( collection( fs, 'dialogs' ), uid ), `${uid}_messages` ), { timestamp: serverTimestamp() } )
    } catch ( e ) {
        console.error( `error send message. please contact to administration (@toron2c)\nmessage: ${e.message}` )
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