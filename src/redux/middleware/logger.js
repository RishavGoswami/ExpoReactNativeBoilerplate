/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-04 02:44:41
 * @Last Modified by: Rishav
 * @Last Modified time: 2020-05-08 22:07:45
 */

// utils
import { log, getDate } from "../../utils";

// constants
import { logs } from "../../constants";

const {
  prevState: { label: prevStateLabel, color: prevStateColor },
  action: { label: actionLabel, color: actionColor },
  nextState: { label: nextStateLabel, color: nextStateColor },
} = logs;

const logger = ({ getState }) => (next) => (action) => {
  const actionType =
    action && action.hasOwnProperty("type") ? action.type : "sss";

  console.group(`action ${actionType} fired @ ${getDate()}`);

  log(prevStateLabel, prevStateColor, getState());
  log(actionLabel, actionColor, action);

  const result = next(action);

  log(nextStateLabel, nextStateColor, getState());

  console.groupEnd();
  return result;
};

export default logger;
