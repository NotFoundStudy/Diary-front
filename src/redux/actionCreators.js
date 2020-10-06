import store from "./store";
import {bindActionCreators} from "redux";
import {Action as appAction} from "./app/redux";
import {Action as chatsAction} from "./chats/redux";

const {dispatch} = store;

export const appCreators = bindActionCreators(appAction.Creators, dispatch);
export const chatsCreators = bindActionCreators(chatsAction.Creators, dispatch);
