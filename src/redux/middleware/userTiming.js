/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-08 22:08:30
 * @Last Modified by: Rishav
 * @Last Modified time: 2020-05-08 22:08:30
 */

// utils
import { log } from "../../utils";

// constants
import { logs } from "../../constants";

const {
  userTiming: { label, color },
} = logs;

const userTiming = () => (next) => (action) => {
  if (action && action.type) {
    if (performance.mark === undefined) return next(action);

    performance.mark(`${action.type}_start`);
    const result = next(action);
    performance.mark(`${action.type}_end`);

    const perf = performance.measure(
      `${action.type}`,
      `${action.type}_start`,
      `${action.type}_end`
    );

    log(label, color, `${perf.duration.toFixed(4)}`);

    return result;
  }
};

export default userTiming;
