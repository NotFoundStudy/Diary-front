import store from "./store";
import {bindActionCreators} from "redux";
import {Action as appAction} from "./app/redux";
import {Action as userAction} from "./user/redux";

const {dispatch} = store;

export const userCreators = bindActionCreators(userAction.Creators, dispatch);
export const appCreators = bindActionCreators(appAction.Creators, dispatch);