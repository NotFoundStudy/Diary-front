import {combineReducers} from "redux";
import {reducer as appReducer} from "./app/redux";
import {reducer as chatsReducer} from "./chats/redux";

const rootReducer = combineReducers({
    app : appReducer,
    chats : chatsReducer
})

export default rootReducer;