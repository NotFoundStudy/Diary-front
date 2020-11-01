import {all, call, fork, put, take, takeLatest} from '@redux-saga/core/effects';
import {getAccessToken, setAccessToken, setLocalStorage} from '../../helper/tokenHelper';
import {navigate} from '../../helper/historyHelper';
import {Action} from "./redux";
import Api from "../../api/index";
import {appCreators, userCreators} from "../actionCreators";


export default function* () {
    yield all([
        takeLatest(Action.Types.REGISTER, function* ({body}) {
            try {
                const result = yield call(Api.register, {body});
                // [회원가입]
                // (정보 입력 : input onBlur시 마다 서버 API 체크)
                // 정보 정상 입력 => toast : '등록 성공' => res: token => localStorage에 저장
                // <로그인> 시도 시 localStorage에 있는 token 값으로 req => 인증이 된 토큰이면 /login으로, 아니면 /confirmation-code 페이지로 이동
                console.log('@@ REGISTER API[result]', result);
                yield put(appCreators.setToastMessage('등록 성공. 이메일 인증을 진행해주세요.'));
                setLocalStorage('tmp-save-register', undefined)
                navigate('/register-confirm');
            } catch (err) {
                console.log('@@ [saga] err', err);
                yield put(appCreators.setToastMessage('등록 실패'));
                setLocalStorage('tmp-save-register', JSON.stringify(body))
                // localStorage에 키 'tmp-save-register'로 저장, '등록 성공'시에는 saved-register키 지우기 (key 자체를 지우기)

            }
        }),
        takeLatest(Action.Types.CONFIRMED, function* ({body}) {
            // 인증코드 입력하는 화면
            try {
                const result = yield call(Api.confirmed, body); // 5lqd237w5n
                yield put(appCreators.setToastMessage('가입이 완료되었습니다.'));
                // res로 유효 토큰이 오는지? 그렇다면 해당 토큰으로 로그인 진행.
                // 로그인 컴포넌트 : props아닌 useEffect: token 가져와서 체크 + 로그아웃 시 token 값 지우기
                navigate('/'); // 로그인된 상태로 메인화면으로 진입
            } catch (err) {
                console.log('@@ [saga] err', err);
                yield put(appCreators.setToastMessage('가입 실패'));
            }
        }),

        // 고도화 - 비봉쇄 로그인 읽은 뒤 리팩토링 or not
        takeLatest(Action.Types.LOGIN, function* ({body}) {
            console.log('@@ [saga]login', body);
            try {
                const result = yield call(Api.login, {body});

                // 테스트용 유저 토큰
                // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6W10sImNvbmZpcm1lZCI6ZmFsc2UsIl9pZCI6IjVmOTk3Nzg1ZmYyYTJjMWFjMjJkMjNkZiIsImVtYWlsIjoiYnkwMkBreW9uZ2dpLmFjLmtyIiwicGFzc3dvcmQiOiJlMmQ3OWQ2MTdjMzA0YjMxMjgyMjVjY2Q2ZGU4OGM0MTAzZGM1MjViMjU1Mzg5OWI3YTRkOGQ5YWQwNzkxOTFiIiwic3R1ZGVudElkIjoiMTIzNDEyMzQiLCJuYW1lIjoiZGRkIiwiY29uZmlybWF0aW9uX2NvZGUiOiIydGJwOGk2dnZqMyIsImNyZWF0ZWRBdCI6IjIwMjAtMTAtMjhUMTM6NTI6MDUuNDc3WiIsInVwZGF0ZWRBdCI6IjIwMjAtMTAtMjhUMTM6NTI6MDUuNDc3WiIsIl9fdiI6MCwiaWF0IjoxNjAzODkzODgxfQ.HeAAoZJBL_UaEx7zNIepx0Yu3SsjEDUssj5lk2AHAv8

                // <로그인> 시도 시 localStorage에 있는 token 값으로 req => 인증이 된 토큰이면 /login으로, 아니면 /confirmation-code 페이지로 이동
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