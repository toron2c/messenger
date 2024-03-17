import { updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { doc, updateDoc } from "firebase/firestore";
import { all, put, select, takeLatest } from "redux-saga/effects"; // delay (?)
import { auth, fs } from "../../services/firebase";
import { setAvatarToProfile, setErrorSaveProfile, setToggleProfileEdit } from "../actions";
import { SAVE_PROFILE_WITH_SAGA, SET_AVATAR_PROFILE_WITH_SAGA } from "../types";





function* saveProfileWorker() {
    try {
        const db = getDatabase();
        const profile = yield select( state => state.profile );
        yield updateProfile( auth.currentUser, {
            displayName: profile.name
        } )
        yield set( ref( db, 'profile/' + auth.currentUser.uid ), {
            status: profile.infoUser.status,
            about: profile.infoUser.about
        } )

        yield updateDoc( doc( fs, 'users', auth.currentUser.uid ), {
            displayName: profile.name
        }, )

        yield put( setToggleProfileEdit() );

    } catch ( error ) {
        let msg = `Error save data, please contact to administration (@toron2c)! Message:${error.message}`
        console.error( msg );
        yield put( setErrorSaveProfile( msg ) )
    }
}

function* setAvatarWorker( { src } ) {
    try {
        yield updateDoc( doc( fs, 'users', auth.currentUser.uid ), {
            avatar: src
        } );
        yield put( setAvatarToProfile( src ) )
    } catch ( error ) {
        console.error( `error set avatar. Contact to administrator @toron2c, error: ${error.message}` );
    }
}


function* setAvatarWatcher() {
    yield takeLatest( SET_AVATAR_PROFILE_WITH_SAGA, setAvatarWorker )
}

function* saveProfileWatcher() {
    yield takeLatest( SAVE_PROFILE_WITH_SAGA, saveProfileWorker )
}

export function* rootProfileSaga() {
    yield all( [saveProfileWatcher(), setAvatarWatcher()] )
}