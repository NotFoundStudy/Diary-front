import {take, fork, put,} from '@redux-saga/core/effects';
import {Action as appAction} from './slice';

function* fetchAAA(item) {
  try{
      const userInfo = yield take(appAction.registRequest().type);

  }catch(e){

  }
}

// function* registFlow() {
//     try{
//         const {registRequest} = appAction;
//         const {payload : userInfo} = yield take(registRequest().type);
//         //regist API
//         // const [status, {data}] = yield call(registApi, payload)
//         // yield put(Action.success())
//     }catch(e){
//         // yield put(Action.fail())
//     }
//
// }
//
// export const regist = registFlow;
// export const login = loginFlow;