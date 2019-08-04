import React, { Component } from "react";
// import { ReactComponent as ReactLogo } from "./logo.svg";

import Routes from "./routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redux/reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const AppRouter = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
export default AppRouter;
