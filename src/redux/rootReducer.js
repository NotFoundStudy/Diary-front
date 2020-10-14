import {combineReducers} from "redux";
// import {reducer as appReducer} from "./app/redux";
import {reducer as chatsReducer} from "./chats/redux";

import {Reducer as appReducer} from "./app/slice";

const rootReducer = combineReducers({
    app : appReducer,
    chats : chatsReducer
})

export default rootReducer;