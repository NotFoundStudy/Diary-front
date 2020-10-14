import { takeLatest, take, fork, call, put, delay, spawn } from '@redux-saga/core/effects';
// import { api } from '../../api';
import { Action as appAction } from './slice';
import { navigate } from '../../helper/historyHelper';
import { getAccessToken, setAccessToken } from '../../helper/tokenHelper';

function* authorize(email, password) {
    const { loginSuccess, loginFail } = appAction;
    try {
        const user = {
            email: '00ghks22@naver.com',
            nickname: 'gorillaKim',
            accessToken: 'accessToken',
        }; // yield call(Api.authorize, email, password);
        yield put(loginSuccess(user));
		const { accessToken } = user
        setAccessToken( accessToken );
    } catch (error) {
        yield put(loginFail(error));
        setAccessToken('');
        navigate('/');
    }
}

export default function* loginFlow() {
    const { loginRequest, logout } = appAction;

    while (true) {
        const { payload } = yield take(loginRequest().type);
        const { email, password } = payload;
        yield fork(authorize, email, password);
        yield take(logout().type);
        setAccessToken('');
        navigate('/');
    }
}