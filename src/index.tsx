import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer, { rootSaga } from "./store";
import { browserHistory } from "lib/historyUtils";
import "./index.css";
import { Router } from "react-router-dom";
import { setUserInfo } from "store/user/actions";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

function loadUser() {
  try {
    const data = JSON.parse(localStorage.getItem("goodfinger") || "{}");
    if (!data.email) return;

    store.dispatch(setUserInfo(data));
  } catch (e) {
    console.log(e);
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
