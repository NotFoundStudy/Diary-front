import { createBrowserHistory } from "history";

const HISTORY = createBrowserHistory();

export const navigate = (url) => {
  HISTORY.push(url);
};

export const goTo = (url) => {
  if (url) {
    window.location.href = url;
  }
};

export default HISTORY;
