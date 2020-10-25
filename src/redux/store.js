import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./rootReducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware), applyMiddleware(logger)));

sagaMiddleware.run(sagas);

export default store;