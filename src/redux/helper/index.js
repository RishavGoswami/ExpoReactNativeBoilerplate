/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-05 18:15:21
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 20:11:44
 */

// redux
import { bindActionCreators } from "redux";
import { actionCreators } from "../actions/creators";

// constants
import {
  REDUX_STATE,
  GET_MULTIPLE_STATE,
  GET_SINGLE_STATE,
} from "../../constants";

// utils
import { getMultipleStatesFromStore } from "../../utils";

const getState = (state, key, type, stateNameInComp) => {
  if (!type) return { [key]: state[key] };
  switch (type) {
    case GET_MULTIPLE_STATE:
      return getMultipleStatesFromStore(key, state);
    case GET_SINGLE_STATE:
      return { [stateNameInComp]: state[key] };
    default:
      return { [REDUX_STATE]: state };
  }
};

export const mapStateToProps = (key, type, stateNameInComp) => (state) =>
  getState(state, key, type, stateNameInComp);

export const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
