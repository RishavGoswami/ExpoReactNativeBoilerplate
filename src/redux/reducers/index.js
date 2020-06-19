/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-04 21:54:49
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 18:37:57
 */

// redux
import { combineReducers } from "redux";

// reducers
import userReducer from "./user";

// combining all the reducers
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
