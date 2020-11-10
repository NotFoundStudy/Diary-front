import {combineReducers} from "redux";
import {reducer as appReducer} from "./app/redux";
import {reducer as userReducer} from "./user/redux";
import {reducer as editorReducer} from "./editor/redux";

const rootReducer = combineReducers({
    app : appReducer,
    user : userReducer,
    editor : editorReducer,
})

export default rootReducer;