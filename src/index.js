import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import {Router} from "react-router-dom";
import HISTORY from "./helper/historyHelper";
import './assets/scss/style.scss'
import 'antd/dist/antd.css';
import App from './App';

ReactDOM.render(
      <Provider store={store}>
          <Router history={HISTORY}>
              <App />
          </Router>
      </Provider>,
  document.getElementById('root')
);
