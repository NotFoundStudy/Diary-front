import store from "./store";
import {bindActionCreators} from "redux";
import {Action as appAction} from "./app/slice";

const dispatch = store && store.dispatch;

export const appCreators = bindActionCreators(appAction.Creators, dispatch);
