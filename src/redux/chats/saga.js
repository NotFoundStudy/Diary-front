import {takeLatest, call, put, delay, spawn} from '@redux-saga/core/effects';
import {Action} from "./redux";
import {appCreators, chatsCreators} from "../actionCreators";
import API from "../../api";
import {navigate} from "../../helper/historyHelper";
import {getAccessToken, setAccessToken} from "../../helper/tokenHelper";

export default function* () {
    // to use in saga function
    const toastMessage = function*(message, duration = 4000){
        yield put(appCreators.updateState({toastMessage: message}))
        yield spawn(function*(){
            yield delay(duration);
            yield put(appCreators.updateState({toastMessage: ''}))
        })
    }

    // chatList
    // yield takeLatest(Action.Types.FETCH_CHATS, function* ({userId}) {
    //
    // });

    // chatDetail
    yield takeLatest(Action.Types.FETCH_CHAT, function* ({chatId}) {
        const result = yield call(API.fetchChat, chatId);
        console.log('@@ [fetchChat]', result);
        yield put(chatsCreators.updateState({selectedChat: result.data}))
    });
}