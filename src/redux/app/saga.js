import { takeLatest, call, put, delay, spawn } from '@redux-saga/core/effects';
import { Action } from './redux';
import { appCreators } from '../actionCreators';
import API from '../../api';
import { navigate } from '../../helper/historyHelper';
import { getAccessToken, setAccessToken } from '../../helper/tokenHelper';

export default function* () {
    // to use in saga function
    const toastMessage = function* (message, duration = 4000) {
        yield put(appCreators.updateState({ toastMessage: message }));
        yield spawn(function* () {
            yield delay(duration);
            yield put(appCreators.updateState({ toastMessage: '' }));
        });
    };

    // to use Action Creator
    yield takeLatest(Action.Types.SET_TOAST_MESSAGE, function* ({ message }) {
        yield put(appCreators.updateState({ toastMessage: message }));
        yield spawn(function* () {
            yield delay(4000);
            yield put(appCreators.updateState({ toastMessage: '' }));
        });
    });

    yield takeLatest(Action.Types.GET_USER_TOKEN, function* () {});

    yield takeLatest(Action.Types.LOG_IN, function* ({ userInfo }) {
        // const result = yield call(API.logIn, userInfo)
        // console.log('@@ [saga] LOG_IN :', result);
        // setAccessToken(result.data);
        // yield put(appCreators.updateState({user: result.data}))

        console.log('@@ [saga] userInfo', userInfo);
        setAccessToken('replace to tokenValue');
        yield put(
            appCreators.updateState({
                user: {
                    ...userInfo,
                },
            })
        );
        // 동기화에서 fail여부는 없는 건가? 그냥 실행 시작-완료로만 체크되는 건가
        navigate('/');
    });
    yield takeLatest(Action.Types.LOG_OUT, function* () {
        // 추후 try catch로 success:false 일때 처리
        // const accessToken = getAccessToken();
        // const result = yield call(API.logOut, accessToken)
        // console.log('@@ [saga] LOG_OUT :', result);
        // setAccessToken('');
        // yield put(appCreators.updateState({user: null}}))

        // for sample
        setAccessToken('');
        yield put(appCreators.updateState({ user: null }));
        navigate('/');
    });
}