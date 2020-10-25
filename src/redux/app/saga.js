import {take, fork, call, put, delay, spawn} from '@redux-saga/core/effects';
import {Action as appAction} from './slice';
import {getAccessToken, setAccessToken} from '../../helper/tokenHelper';
import {navigate} from '../../helper/historyHelper';


function* loginAuthorize(userInfo) {
    const {loginSuccess, loginFail} = appAction;
    const {email, password, name, accessToken} = userInfo;

    try { // yield call(Api.authorize, email, password);
        const user = {
            email,
            password,
            name,
            accessToken,
        };
        yield put(loginSuccess(user));
        const {accessToken} = user
        setAccessToken(accessToken);
    } catch (error) {
        yield put(loginFail(error));
        setAccessToken('');
        // navigate('/');
    }
}

function* registFlow() {
    try{
        const {registRequest} = appAction;
        const {payload : userInfo} = yield take(registRequest().type);
        //regist API    
        // const [status, {data}] = yield call(registApi, payload)
        // yield put(Action.success())
    }catch(e){
        // yield put(Action.fail())
    }
    
    

}

function* loginFlow() {
    const {loginRequest, logout} = appAction;

    while (true) {
        try{
            const {payload : userInfo} = yield take(loginRequest().type);
            yield fork(loginAuthorize, userInfo);
            
            //login API
            // const [status, {data}] = yield call(loginApi, payload)

            // yield take(logout().type);
            setAccessToken('');
            // navigate('/'); route 부분은 action에서 하는게 나을듯?
            // yield put(Action.success())
        }catch(e){
            // yield put(Action.fail());
        }
        
    }
}

export const regist = registFlow;
export const login = loginFlow;