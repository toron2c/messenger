import { put, delay, takeLatest } from 'redux-saga/effects'
import { sendMessage } from '../actions';
import { SEND_MESSAGE_WITH_SAGA } from '../types'

function* messageBotWorker( action ) {
    yield put( sendMessage( action.id, action.author ) );
    if ( action.author === 'user' ) {
        yield delay( 5000 );
        yield put( sendMessage( action.id, 'bot' ) );
    }
}

export function* messageWatcher() {
    yield takeLatest( SEND_MESSAGE_WITH_SAGA, messageBotWorker )
}