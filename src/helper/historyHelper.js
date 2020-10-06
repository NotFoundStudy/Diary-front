import {createBrowserHistory} from "history";

const HISTORY= createBrowserHistory();

export const navigate = (url) => {
    HISTORY.push(url);
}

export default HISTORY;