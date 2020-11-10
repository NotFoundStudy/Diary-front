import store from "./store";
import { bindActionCreators } from "redux";
import { Action as appAction } from "./app/redux";
import { Action as userAction } from "./user/redux";
import { Action as editorAction } from "./editor/redux";

const { dispatch } = store;

export const editorCreators = bindActionCreators(
  editorAction.Creators,
  dispatch
);
export const userCreators = bindActionCreators(userAction.Creators, dispatch);
export const appCreators = bindActionCreators(appAction.Creators, dispatch);
