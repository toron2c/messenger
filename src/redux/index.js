import { applyMiddleware, compose, createStore } from 'redux';

import { rootReducer } from './reducers/rootReducer';

import createSagaMiddleware from '@redux-saga/core';

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer( persistConfig, rootReducer );



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleware();
let store = createStore( persistedReducer, composeEnhancers( applyMiddleware( sagaMiddleWare ) ) );
let persistor = persistStore( store );

export { store, persistor, sagaMiddleWare }
