import {all} from "@redux-saga/core/effects";
import appSaga from "./app/saga";
import loginFlow from "./app/saga2";
import chatsSaga from "./chats/saga";

export default function*(){
    yield all([
		loginFlow(),
        appSaga(),
        chatsSaga(),
    ])
}