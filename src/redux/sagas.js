import {all} from "@redux-saga/core/effects";
import appSaga from "./app/saga";
import chatsSaga from "./chats/saga";

export default function*(){
    yield all([
        appSaga(),
        chatsSaga(),
    ])
}