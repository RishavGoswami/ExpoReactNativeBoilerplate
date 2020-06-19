/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-04 02:45:41
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 18:05:33
 */
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const style = (color) =>
  `background: #1d1d1d; color: ${color}; padding: 5px 10px 5px 10px; font-weight: 600;`;

export const log = (label, color, log) =>
  console.log(`%c${label}`, style(color), log);

export const getDate = () => new Date().toString();

export const getDeviceWidth = (percentage) =>
  percentage ? `${percentage}%` : width;

export const getDeviceHeight = () => height;

export const unitToPx = (unit) => `${unit}px`;

export const SPACING_MULTIPLIER = 8;
export const space = (num = 1, suffix = false) =>
  suffix ? `${num * SPACING_MULTIPLIER}px` : num * SPACING_MULTIPLIER;

export const getSameWidthAndHeight = (val) => ({ width: val, height: val });

export const makeID = () => `_${Math.random().toString(36).substr(2, 9)}`;

export const getMultipleStatesFromStore = (key, state) => {
  if (Array.isArray(key)) {
    const createSingleObj = (obj, { stateName, propsNameInComp, isSame }) => {
      if (isSame) {
        return {
          ...obj,
          [stateName]: state[stateName],
        };
      }
      return {
        ...obj,
        [propsNameInComp]: state[stateName],
      };
    };

    return key.reduce(createSingleObj, {});
  }
};

export const getArrayOfLength = (length) =>
  Array.from(
    {
      length,
    },
    () => (v, i) => i
  );

export const navigationTo = ({ navigate }, path) => navigate(path);
