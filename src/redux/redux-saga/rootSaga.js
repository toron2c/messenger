import { all } from "redux-saga/effects";
import { getListWatcher } from "./charactersSaga";
import { messageWatcher } from "./messageSaga";






export default function* rootWatcher() {
    yield all( [messageWatcher(), getListWatcher()] )
}