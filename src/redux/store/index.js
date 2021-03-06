/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-04 02:44:41
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-20 01:13:06
 */

// redux
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// enhancers
import monitorReducersEnhancer from "../enhancers/monitorReducer";

// middlewares
import loggerMiddleware from "../middleware/logger";
import apiMiddleware from "../middleware/actions";

// reducer
import rootReducer from "../reducers/index";

export default configureStore = (preloadedState) => {
  const middlewares = [
    loggerMiddleware,
    apiMiddleware,
    thunkMiddleware,
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};
