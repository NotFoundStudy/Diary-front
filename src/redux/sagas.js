import {all} from "@redux-saga/core/effects";
import loginFlow from "./app/saga"; // loginFlow, appSaga(toastMessage, etc...) 구조 분리 여부 검토

export default function*(){
    yield all([
		loginFlow(),
    ])
}