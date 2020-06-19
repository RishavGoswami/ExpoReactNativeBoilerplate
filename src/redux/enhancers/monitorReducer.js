/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-04 02:44:41
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 19:47:24
 */

// utils
import { log } from "../../utils";

// constants
import { logs } from "../../constants";

const {
  executionTime: { label, color },
} = logs;

const round = (number) => Math.round(number * 100) / 100;

const monitorReducerEnhancer = (createStore) => (
  reducer,
  initialState,
  enhancer
) => {
  const monitoredReducer = (state, action) => {
    console.time("label");

    const startTime = Date.now();
    const newState = reducer(state, action);
    const endTime = Date.now();
    const executionTime = round(endTime - startTime);

    log(label, color, executionTime);
    console.timeEnd("label");

    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

export default monitorReducerEnhancer;
