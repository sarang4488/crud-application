import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import _ from "lodash";
import rootReducer from "./rootReducer";
import { watcherSagaForAddStudent } from "./rootSaga";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleware = _.compact([thunk, freeze, logger, sagaMiddleware]);

const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composingMiddlewareAndDevTools = composePlugin(
  applyMiddleware(...middleware)
);
const store = createStore(rootReducer, composingMiddlewareAndDevTools);
sagaMiddleware.run(watcherSagaForAddStudent);

export default store;
