import {all, call, put, takeLatest} from '@redux-saga/core/effects';
import {getAccessToken, setAccessToken, setLocalStorage} from '../../helper/tokenHelper';
import {Action} from "./redux";
import {appCreators, userCreators} from "../actionCreators";
import {editor as editorApi} from '../../api/editor'

export default function* () {
    yield all([
        takeLatest(Action.Types.INSERT, function* (body){
            const {
                userId, 
                contents, 
                title,
                isSecret,
                password,
            } = body;

            if(userId && contents && title && isSecret &&password){
                try{
                    editorApi.insert({userId, contents, title, isSecret, password})
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