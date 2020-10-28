import {all, call, fork, put, take, takeLatest} from '@redux-saga/core/effects';
import {getAccessToken, setAccessToken} from '../../helper/tokenHelper';
import {navigate} from '../../helper/historyHelper';
import {Action} from "./redux";
import Api from "../../api/index2";
import {appCreators, userCreators} from "../actionCreators";


export default function* () {
    yield all([
        takeLatest(Action.Types.REGISTER, function* ({body}) {
            try {
                const result = yield call(Api.register, values);
                yield put(appCreators.setToastMessage('등록 성공. 이메일 인증을 진행해주세요.')); // 추후 대응 변경
                navigate('/register-confirm');
            } catch (err) {
                console.log('@@ [saga] err', err);
                yield put(appCreators.setToastMessage('등록 실패'));
                // app 스토어 단 처리 or 응답값에 따라 대처
                // yield put(appCreators.updateState({
                //     error: ''
                // }))
            }
        }),
        takeLatest(Action.Types.REQUEST_CONFIRMATION_CODE, function* ({body}) {
            try {
                const result = yield call(Api.requestConfirmationCode, body);
                yield put(appCreators.setToastMessage('가입이 완료되었습니다.')); // 추후 대응 변경
                navigate('/'); // 로그인된 상태로 메인화면으로 진입
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
        takeLatest(Action.Types.LOGIN, function* ({body}) {
            try {
                const result = yield call(Api.login, body);

                // 이메일 인증 완료된 토큰(or error)이면 or navigate('/register-confirm')
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