const PREV_STATE = "prev state";
const ACTION = "action";
const NEXT_STATE = "next state";
const EXECUTION_TIME = "execution time";
const USER_TIMING = "user timing ( in sec )";

export const logs = {
  prevState: { label: PREV_STATE, color: "#fd5e53" },
  action: { label: ACTION, color: "#FED000" },
  nextState: { label: NEXT_STATE, color: "#75DAAD" },
  executionTime: { label: EXECUTION_TIME, color: "#40bad5" },
};

export const REDUX_STATE = "state";
export const GET_MULTIPLE_STATE = "multiple";
export const GET_SINGLE_STATE = "single";

export const SLIDE_FORWARD = "forward";
export const SLIDE_BACKWARD = "backward";

export const API = {
  GET_METHOD: "GET",
  POST_METHOD: "POST",
  PUT_METHOD: "PUT",
  DELETE_METHOD: "DELETE",
  API_PARAMS: "params",
  API_DATA: "data",
  APPLICATION_TYPE: "application/json",
  CONTENT_TYPE: "Content-Type",
  AUTHORIZATION: "Authorization",
  BEARER: "Bearer",
};

export const content = {
  chooseCountry: "Country",
  apiCancel: "Operation cancelled by the user.",
  backIconName: "arrow-circle-left",
  worldwideLabel: "Worldwide",
};

export const ROUTE = {
  onBoardings: "onBoarding",
  dashboard: "dashboard",
};

export const GRAPH = {
  height: 220,
  yAxisPrefix: "$",
  yAxisSuffix: "k",
  yAxisInterval: 0.8,
};

export const logoLetters = () => ["C", "v", "i", "d", "-", "1", "9"];
