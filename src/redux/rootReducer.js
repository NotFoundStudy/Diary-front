import {combineReducers} from "redux";
import {Reducer as appReducer} from "./app/slice";
import {Reducer as menuReducer} from "./menu/slice";

const rootReducer = combineReducers({
    app : appReducer,
    menu: menuReducer,
})

export default rootReducer;