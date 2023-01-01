import { all, call, delay, fork, put, select, takeLatest } from "redux-saga/effects";
import { AUTHORIZATION_USER, LOGOUT_AUTH_WITH_SAGA, REGISTRATION_USER } from "../types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth'
import { auth, fs } from '../../services/firebase'
import { initializeProfile, logoutAuth, setErrorAuth, setStatusAuth, getChatsWithSaga, deleteDataAfterLogout } from "../actions";
import { get, getDatabase, ref, set } from "firebase/database";
import { doc, getDoc, setDoc } from "firebase/firestore";


// function gen registration start function initialize profile
function* registrationUserWorker() {
    try {
        const data = yield select( state => state.auth );
        if ( data.email === '' || data.pass === '' ) return;
        yield call( createUserWithEmailAndPassword, auth, data.email, data.pass );
        yield delay( 1000 );
        yield fork( initializeProfileInDB );
        yield fork( initializeProfileWorker );
        yield put( getChatsWithSaga() );
        yield put( setStatusAuth( true ) );
    } catch ( e ) {
        let message = e.message.substring( e.message.search( 'Firebase:' ) + 10 );
        yield put( setErrorAuth( true, message ) );
    }
}

function* authUserWorker() {
    try {
        const data = yield select( state => state.auth );
        if ( data.email === '' || data.pass === '' ) return;
        yield call( signInWithEmailAndPassword, auth, data.email, data.pass );
        yield fork( initializeProfileWorker );
        yield put( setStatusAuth( true ) );
        yield put( getChatsWithSaga() );
    } catch ( e ) {
        let message = e.message.substring( e.message.search( 'Firebase:' ) + 10 );
        yield put( setErrorAuth( true, message ) );
    }
}

function* initializeProfileInDB() {
    try {
        let db = getDatabase();
        yield set( ref( db, 'profile/' + auth.currentUser.uid ), {
            status: '',
            about: ''
        } )
        yield setDoc( doc( fs, 'users', auth.currentUser.uid ), {
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            dialogs: [],
            chats: [],
        } );
    } catch ( error ) {
        console.error( `Error registration! Please contact to Administration Chat!(@toron2c) ErrorMessage: ${error.message}` )
    }
}

function* logoutUserWorker() {
    yield signOut( auth );
    yield put( logoutAuth() );
    yield put( deleteDataAfterLogout() );
}

function* initializeProfileWorker() {
    try {
        const dbRef = ref( getDatabase(), `profile/${auth.currentUser.uid}` );
        const refUser = doc( fs, 'users', auth.currentUser.uid );
        const us = yield getDoc( refUser );
        let avatarsrc = '';
        if ( us.data().avatar ) {
            avatarsrc = us.data().avatar;
        }
        const infoUser = yield get( dbRef );
        let data = {
            email: auth.currentUser.email,
            name: auth.currentUser.displayName,
            uid: auth.currentUser.uid,
            avatar: avatarsrc,
            infoUser: infoUser.val()
        }
        yield put( initializeProfile( data ) );
    } catch ( error ) {
        console.error( `Error get datas profile. Please contact to administration Chat! (@toron2c) ErrorMessage: ${error.message}` );

    }
}


function* registrationUserWatcher() {
    yield takeLatest( REGISTRATION_USER, registrationUserWorker )
}

function* authUserWatcher() {
    yield takeLatest( AUTHORIZATION_USER, authUserWorker )
}

function* logoutUserWatcher() {
    yield takeLatest( LOGOUT_AUTH_WITH_SAGA, logoutUserWorker )
}

export function* rootAuthSaga() {
    yield all( [registrationUserWatcher(), authUserWatcher(), logoutUserWatcher()] )
}