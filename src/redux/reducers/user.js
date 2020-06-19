/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-08 22:08:30
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 18:02:06
 */

// types
import {
  GET_USER_LIST_INIT,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_ERROR,
  GET_USER_LIST_FAILURE,
  GET_USER_LIST_COMPLETED,
} from "../actions/types/user";

export const initialState = {
  isLoading: false,
  isComplete: false,
  hasFetchError: false,
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_INIT: {
      return {
        ...state,
        isLoading: true,
        isComplete: false,
      };
    }

    case GET_USER_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isComplete: false,
        data: action.payload,
      };
    }

    case GET_USER_LIST_ERROR:
    case GET_USER_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isComplete: false,
        hasFetchError: true,
      };
    }
    case GET_USER_LIST_COMPLETED: {
      return {
        ...state,
        isLoading: false,
        isComplete: true,
        hasFetchError: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
