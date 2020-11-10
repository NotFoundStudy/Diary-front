import {all, call, delay, put, takeLatest} from '@redux-saga/core/effects';
import {
    getLocalStorage,
    setLocalStorage,
    removeLocalStorageItem,
} from '../../helper/tokenHelper';
import {navigate} from '../../helper/historyHelper';
import {Action} from "./redux";
import registerApi from "../../api/register";
import {appCreators, userCreators} from "../actionCreators";


export default function* () {
    yield all([
        takeLatest(Action.Types.CHECK_EMAIL, function* ({body}) {
            try {
                yield delay(2000);
                const result = yield call(registerApi.checkEmail, {body});
                console.log('@@ [saga]CHECK_EMAIL_result', result);
                if (result.data.message === 'email is duplicated') {
                    // console.log('@@ 중복');
                    yield put(userCreators.updateState({validEmail: false}))
                } else {
                    // console.log('@@ 가능');
                    yield put(userCreators.updateState({validEmail: true}))
                }
            } catch (err) {
                console.log('@@ [saga]CHECK_EMAIL_err', err);
            }
        }),
        takeLatest(Action.Types.CHECK_STUDENT_ID, function* ({body}) {
            try {
                yield delay(2000);
                const result = yield call(registerApi.checkStudentId, {body});
                console.log('@@ [saga]CHECK_STUDENT_ID_result', result);
                if (result.data.message === 'studentId is duplicated') {
                    console.log('@@ 중복');
                    yield put(userCreators.updateState({validStudentId: false}))
                } else {
                    console.log('@@ 안 중복');
                    yield put(userCreators.updateState({validStudentId: true}))
                }
            } catch (err) {
                console.log('@@ [saga]CHECK_EMAIL_err', err);
            }
        }),
        takeLatest(Action.Types.REGISTER, function* ({body}) {
            try {
                // 정보 정상 입력 => toast : '등록 성공' => res: token => localStorage에 저장
                const result = yield call(registerApi.register, {body});
                console.log('@@[saga]REGISTER - result', result);

                // already exist email 이런 부분은 front에서 제거해서 여기서는 체크 x

                yield put(appCreators.setToastMessage('등록 성공. 이메일 인증을 진행해주세요.'));
                removeLocalStorageItem('tmp-save-register');
                // navigate('/register-confirm');
            } catch (err) {
                console.log('@@ [saga]REGISTER - err', err);
                yield put(appCreators.setToastMessage('등록 실패'));
                setLocalStorage('tmp-save-register', JSON.stringify(body))
            }
        }),
        takeLatest(Action.Types.CONFIRMED, function* ({body}) {
            // 인증코드 입력하는 화면
            try {
                const result = yield call(registerApi.confirmed, {body}); // 5lqd237w5n
                console.log('@@ [saga]CONFIRMED - result', result);

                yield put(appCreators.setToastMessage('가입이 완료되었습니다.'));
                // res로 유효 토큰이 오는지? 그렇다면 해당 토큰으로 로그인 진행.
                //fork로 login 로직
                navigate('/');
            } catch (err) {
                console.log('@@ [saga]CONFIRMED - err', err);
                yield put(appCreators.setToastMessage('가입 실패'));
            }
        }),

        // 고도화 - 비봉쇄 로그인 읽은 뒤 리팩토링 or not
        takeLatest(Action.Types.LOGIN, function* ({body}) {
            try {
                const result = yield call(registerApi.login, {body});
                console.log('@@ [saga]LOGIN - result', result);
                // login failed일떄 status 404말고 200으로?(포스트맨은 되는데, 앱에서 진행 안됨)
                // 테스트용 유저 토큰 : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6W10sImNvbmZpcm1lZCI6ZmFsc2UsIl9pZCI6IjVmOTk3Nzg1ZmYyYTJjMWFjMjJkMjNkZiIsImVtYWlsIjoiYnkwMkBreW9uZ2dpLmFjLmtyIiwicGFzc3dvcmQiOiJlMmQ3OWQ2MTdjMzA0YjMxMjgyMjVjY2Q2ZGU4OGM0MTAzZGM1MjViMjU1Mzg5OWI3YTRkOGQ5YWQwNzkxOTFiIiwic3R1ZGVudElkIjoiMTIzNDEyMzQiLCJuYW1lIjoiZGRkIiwiY29uZmlybWF0aW9uX2NvZGUiOiIydGJwOGk2dnZqMyIsImNyZWF0ZWRBdCI6IjIwMjAtMTAtMjhUMTM6NTI6MDUuNDc3WiIsInVwZGF0ZWRBdCI6IjIwMjAtMTAtMjhUMTM6NTI6MDUuNDc3WiIsIl9fdiI6MCwiaWF0IjoxNjAzODkzODgxfQ.HeAAoZJBL_UaEx7zNIepx0Yu3SsjEDUssj5lk2AHAv8
                if(result.data.message){
                    yield put(userCreators.updateState({validLogin: result.data.message}))
                }
                setLocalStorage('accessToken', result.data.token);
                yield put(userCreators.updateState({
                    user: {
                        ...result.data
                    }
                }))
                navigate('/');
            } catch (err) {
                console.log('@@ [saga]LOGIN - err', err);
            }
        }),

        takeLatest(Action.Types.LOGOUT, function* () {
            try {
                const token = getLocalStorage('accessToken');
                const result = yield call(registerApi.logout, token);
                console.log('@@ [saga]LOGOUT - result', result);
                setLocalStorage('accessToken', '');
                yield put(userCreators.updateState({user: null}))
                navigate('/');
            } catch (err) {
                console.log('@@ [saga]LOGOUT - err', err);
            }
        }),
    ])
}