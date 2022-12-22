import { all } from "redux-saga/effects";
import { saveProfileWatcher } from "./profileSaga";
import { registrationUserWatcher, authUserWatcher, logoutUserWatcher } from "./authSaga";
import { getListWatcher } from "./charactersSaga";
import { createNewChatWatcher, getChatsWatcher, subscibeOnNewChatsWatcher } from "./chatsSaga";
import { getMessagesWatcher, getOldMessagesWatcher, sendMessageWatcher, subscribeOnNewMessagesWatcher } from "./messagesSaga";
import { subscribeOnNewMessages } from "../actions";






export default function* rootWatcher() {
    yield all( [
        sendMessageWatcher(), getListWatcher(), registrationUserWatcher(),
        authUserWatcher(), logoutUserWatcher(), saveProfileWatcher(),
        getChatsWatcher(), createNewChatWatcher(), subscibeOnNewChatsWatcher(),
        getMessagesWatcher(), getOldMessagesWatcher(), subscribeOnNewMessagesWatcher()
    ] )
}