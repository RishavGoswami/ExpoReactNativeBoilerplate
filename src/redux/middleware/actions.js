/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-08 22:07:23
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 17:55:12
 */

// third-party libraries
import axios from "axios";

// helper
import {
  apiFailure,
  apiError,
  apiStart,
  apiEnd,
  apiSuccess,
} from "../helper/actions";

// constants
import { API, content } from "../../constants";

// types
import { API_CANCEL_REQUEST } from "../actions/types/api";

// utils
import { log } from "../../utils";

const {
  GET_METHOD,
  DELETE_METHOD,
  API_PARAMS,
  API_DATA,
  CONTENT_TYPE,
  AUTHORIZATION,
  BEARER,
  APPLICATION_TYPE,
} = API;

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const apiAction = ({
  url = "",
  method,
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  type,
}) => ({
  type,
  payload: {
    url,
    method: method || GET_METHOD,
    data,
    onSuccess,
    onFailure,
    label,
  },
});

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action) next(action);
  if (action.payload.url === undefined || !action) return;

  const {
    url,
    method,
    data,
    token,
    onSuccess,
    onFailure,
    label,
    headers,
  } = action.payload;

  const dataOrParams = [GET_METHOD, DELETE_METHOD].includes(method)
    ? API_PARAMS
    : API_DATA;

  // axios default configs
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
  axios.defaults.headers.common[CONTENT_TYPE] = APPLICATION_TYPE;
  axios.defaults.headers.common[AUTHORIZATION] = `${BEARER} ${token}`;

  if (action.payload && url) {
    dispatch(apiStart(action.type, label));
  }

  const requestPayload = {
    url,
    method,
    headers,
    [dataOrParams]: data,
    cancelToken: source.token,
  };
  if (action.type === API_CANCEL_REQUEST) {
    source.cancel("Operation canceled by the user.");
    log(content.apiCancel, "red");
  } else {
    axios
      .request(requestPayload)
      .then(({ data }) => {
        dispatch(apiSuccess(action.type, data));
      })
      .catch((error) => {
        dispatch(apiError(action.type, error));
        dispatch(apiFailure(action.type, error));
        dispatch(onFailure(error));
      })
      .finally(() => {
        if (action.type) {
          dispatch(apiEnd(action.type, ""));
        }
      });
  }
};

export default apiMiddleware;
