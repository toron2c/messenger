import { all } from "redux-saga/effects";
import { saveProfileWatcher } from "./profileSaga";
import { registrationUserWatcher, authUserWatcher, logoutUserWatcher } from "./authSaga";
import { getListWatcher } from "./charactersSaga";
import { messageWatcher } from "./messageSaga";
import { createNewChatWatcher, getChatsWatcher } from "./chatsSaga";






export default function* rootWatcher() {
    yield all( [messageWatcher(), getListWatcher(), registrationUserWatcher(), authUserWatcher(), logoutUserWatcher(), saveProfileWatcher(), getChatsWatcher(), createNewChatWatcher()] )
}