import { all } from "redux-saga/effects";
import { saveProfileWatcher } from "./profileSaga";
import { getListWatcher } from "./charactersSaga";
import { rootAuthSaga } from "./authSaga";
import { rootChatSaga } from "./chatsSaga";
import { rootMessagesSaga } from "./messagesSaga";





export default function* rootWatcher() {
    yield all( [
        getListWatcher(), rootAuthSaga(),
        saveProfileWatcher(), rootChatSaga(),
        rootMessagesSaga()
    ] )
}