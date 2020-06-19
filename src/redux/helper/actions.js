import {
  API_START,
  API_COMPLETED,
  API_FAILURE,
  API_ERROR,
  API_SUCCESS,
  API_CANCEL_REQUEST,
} from "../actions/types/api";

export const apiStart = (type, label) => ({
  type: `${type}${API_START}`,
  payload: "",
});

export const apiSuccess = (type, data) => {
  return {
    type: `${type}${API_SUCCESS}`,
    payload: data,
  };
};

export const apiEnd = (type, label) => ({
  type: `${type}${API_COMPLETED}`,
  payload: label,
});

export const apiFailure = (type, label) => ({
  type: `${type}${API_FAILURE}`,
  payload: label,
});

export const apiError = (type, label) => ({
  type: `${type}${API_ERROR}`,
  payload: label,
});

export const cancelApiRequest = () => {
  return {
    type: API_CANCEL_REQUEST,
  };
};
