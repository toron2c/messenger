import { all } from "redux-saga/effects";
import { getListWatcher } from "./charactersSaga";
import { rootAuthSaga } from "./authSaga";
import { rootChatSaga } from "./chatsSaga";
import { rootMessagesSaga } from "./messagesSaga";
import { rootProfileSaga } from "./profileSaga";





export default function* rootWatcher() {
    yield all( [
        getListWatcher(), rootAuthSaga(),
        rootProfileSaga(), rootChatSaga(),
        rootMessagesSaga()
    ] )
}