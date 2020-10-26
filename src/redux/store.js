import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer";
import sagas from "./sagas";
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware), applyMiddleware(logger)));

sagaMiddleware.run(sagas);

export default store;
