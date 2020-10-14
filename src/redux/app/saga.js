import {take, fork, call, put, delay, spawn} from '@redux-saga/core/effects';
import {Action as appAction} from './slice';
import {getAccessToken, setAccessToken} from '../../helper/tokenHelper';
import {navigate} from '../../helper/historyHelper';

function* authorize(email, password) {
    const {loginSuccess, loginFail} = appAction;
    try { // yield call(Api.authorize, email, password);
        const user = {
            email: '00ghks22@naver.com',
            nickname: 'gorillaKim',
            accessToken: 'accessToken',
        };
        yield put(loginSuccess(user));
        const {accessToken} = user
        setAccessToken(accessToken);
    } catch (error) {
        yield put(loginFail(error));
        setAccessToken('');
        navigate('/');
    }
}

export default function* loginFlow() {
    const {loginRequest, logout} = appAction;

    while (true) {
        const {payload} = yield take(loginRequest().type);
        const {email, password} = payload;
        yield fork(authorize, email, password);
        yield take(logout().type);
        setAccessToken('');
        navigate('/');
    }
}