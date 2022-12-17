import { updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { put, select, takeLatest } from "redux-saga/effects";
import { auth, fs } from "../../services/firebase";
import { setToggleProfileEdit } from "../actions";
import { SAVE_PROFILE_WITH_SAGA } from "../types";





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

        yield put( setToggleProfileEdit() )

    } catch ( error ) {
        console.error( `Error save data, please contact to administration (@toron2c)\n ${error.message}` )
    }
}




export function* saveProfileWatcher() {
    yield takeLatest( SAVE_PROFILE_WITH_SAGA, saveProfileWorker )
}