import { call, put, takeEvery } from "redux-saga/effects";
import { apiGetCharacters } from "../../api/api";
import { setError, setList } from "../actions";
import { GET_INIT_LIST } from "../types";

function* getListWorker( { page } ) {
    try {
        let { data } = yield call( apiGetCharacters, page );
        let next = data.info.next ? data.info.next.substring( data.info.next.search( /=/ ) + 1 ) : null;
        let prev = data.info.prev ? data.info.prev.substring( data.info.next.search( /=/ ) + 1 ) : null;
        data = {
            info: {
                prev: prev,
                next: next,
            },
            list: data.results.map( el => {
                return {
                    name: el.name,
                    image: el.image,
                    id: el.id
                }
            } )
        }
        yield put( setList( data ) );
    } catch ( e ) {

        yield put( setError( e.message, page ) );
    }
}

export function* getListWatcher() {
    yield takeEvery( GET_INIT_LIST, getListWorker )
}