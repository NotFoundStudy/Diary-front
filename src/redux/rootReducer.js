import {combineReducers} from "redux";
import {Reducer as appReducer} from "./app/slice";

const rootReducer = combineReducers({
    app : appReducer,
})

export default rootReducer;