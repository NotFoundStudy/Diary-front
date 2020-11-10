import {takeLatest, call, put, delay, spawn} from '@redux-saga/core/effects';
import {Action} from "./redux";
import {appCreators} from "../actionCreators";

export default function* () {
    // to use in saga function
    const toastMessage = function*(message, duration = 4000){
        yield put(appCreators.updateState({toastMessage: message}))
        yield spawn(function*(){
            yield delay(duration);
            yield put(appCreators.updateState({toastMessage: ''}))
        })
    }

    // to use Action Creator
    yield takeLatest(Action.Types.SET_TOAST_MESSAGE, function* ({message}) {
        yield put(appCreators.updateState({toastMessage: message}))
        yield spawn(function* () {
            yield delay(4000);
            yield put(appCreators.updateState({toastMessage: ''}))
        })
    });
}