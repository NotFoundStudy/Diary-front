import {all, call, put, takeLatest} from '@redux-saga/core/effects';
import {getAccessToken, setAccessToken, setLocalStorage} from '../../helper/tokenHelper';
import {Action} from "./redux";
import {appCreators, userCreators} from "../actionCreators";
import {editorApi} from '../../api/editor'

export default function* () {
    yield all([
        takeLatest(Action.Types.INSERT, function* ({body}){
            const {
                contents, 
                title,
                isSecret,
                password,
            } = body;
            const userId = 'test';
            if(userId && contents && title){
                const token = getAccessToken();
                try{
                    editorApi.insert({userId, contents, title, isSecret, password, token})
                    console.log(body)
                    // const result = yield call(Api.insert, {body});
                }catch(err){
                    return err;
                }        
            }else{
                return null;
            }
        })
    ])
}