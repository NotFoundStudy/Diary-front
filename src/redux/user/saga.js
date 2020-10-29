import {all, call, fork, put, take, takeLatest} from '@redux-saga/core/effects';
import {getAccessToken, setAccessToken} from '../../helper/tokenHelper';
import {navigate} from '../../helper/historyHelper';
import {Action} from "./redux";
import Api from "../../api/index";
import {appCreators, userCreators} from "../actionCreators";


export default function* () {
    yield all([
        takeLatest(Action.Types.REGISTER, function* ({body}) {
            console.log('@@ [saga register]', body);
            try {
                const result = yield call(Api.register, {body});
                // 토큰 값 저장하고 있기


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
        takeLatest(Action.Types.CONFIRMED, function* ({body}) {
            console.log('@@ CONFIRME', body);

            try {
                const result = yield call(Api.confirmed, body); // 5lqd237w5n
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
            console.log('@@ [saga]login', body);
            try {
                const result = yield call(Api.login, {body});

                // 테스트용 유저 토큰
                // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6W10sImNvbmZpcm1lZCI6ZmFsc2UsIl9pZCI6IjVmOTk3Nzg1ZmYyYTJjMWFjMjJkMjNkZiIsImVtYWlsIjoiYnkwMkBreW9uZ2dpLmFjLmtyIiwicGFzc3dvcmQiOiJlMmQ3OWQ2MTdjMzA0YjMxMjgyMjVjY2Q2ZGU4OGM0MTAzZGM1MjViMjU1Mzg5OWI3YTRkOGQ5YWQwNzkxOTFiIiwic3R1ZGVudElkIjoiMTIzNDEyMzQiLCJuYW1lIjoiZGRkIiwiY29uZmlybWF0aW9uX2NvZGUiOiIydGJwOGk2dnZqMyIsImNyZWF0ZWRBdCI6IjIwMjAtMTAtMjhUMTM6NTI6MDUuNDc3WiIsInVwZGF0ZWRBdCI6IjIwMjAtMTAtMjhUMTM6NTI6MDUuNDc3WiIsIl9fdiI6MCwiaWF0IjoxNjAzODkzODgxfQ.HeAAoZJBL_UaEx7zNIepx0Yu3SsjEDUssj5lk2AHAv8

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