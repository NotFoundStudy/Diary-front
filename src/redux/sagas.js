import {all} from "@redux-saga/core/effects";
import appSaga from "./app/saga";
import userSaga from "./user/saga";

export default function* () {
    yield all([
        appSaga(),
        userSaga(),
    ])
}