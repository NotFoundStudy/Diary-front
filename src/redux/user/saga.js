import {all, call, fork, put, take, takeLatest} from '@redux-saga/core/effects';
import {getAccessToken, setAccessToken} from '../../helper/tokenHelper';
import {navigate} from '../../helper/historyHelper';
import {Action} from "./redux";
import Api from "../../api";
import {appCreators, userCreators} from "../actionCreators";


export default function* () {
    yield all([
        takeLatest(Action.Types.REGISTER, function* ({values}) {
            try {
                const result = yield call(Api.register, values);
                yield put(appCreators.setToastMessage('가입 성공')); // 추후 대응 변경
                navigate('/');
            } catch (err) {
                console.log('@@ [saga] err', err);
                yield put(appCreators.setToastMessage('가입 실패'));
                // app 스토어 단 처리 or 응답값에 따라 대처
                // yield put(appCreators.updateState({
                //     error: ''
                // }))
            }
        }),

        // 비봉쇄 로그인 읽은 뒤 리팩토링 or not
        takeLatest(Action.Types.LOGIN, function* ({userInfo}) {
            try {
                const result = yield call(Api.login, userInfo);

                setAccessToken(result.data.accessToken);
                yield put(userCreators.updateState({
                    user: {
                        ...result.data
                    }
                }))
                navigate('/');
            } catch (err) {
                console.log('@@ [saga] err', err);
                // app 스토어 단 처리 or 응답값에 따라 대처
                // yield put(appCreators.updateState({
                //     error: ''
                // }))
            }
        }),
        takeLatest(Action.Types.LOGOUT, function* () {
            try {
                const accessToken = getAccessToken();
                const result = yield call(Api.logout, accessToken);

                setAccessToken('');
                yield put(userCreators.updateState({user: null}))
                navigate('/');
            } catch (err) {
                console.log('@@ [saga] err', err);
                // app 스토어 단 처리 or 응답값에 따라 대처
                // yield put(appCreators.updateState({
                //     error: ''
                // }))
            }
        }),
    ])
}