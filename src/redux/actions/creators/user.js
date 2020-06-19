/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-04 02:42:38
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 17:54:16
 */

// thrid-party libraries
// env configs
import { DUMMY_USER_LIST } from "react-native-dotenv";

// types
import { GET_USER_LIST } from "../types/user";

// middleware
import { apiAction } from "../../middleware/actions";

// constants
import { API } from "../../../constants";

const { GET_METHOD } = API;

export const getUserList = () =>
  apiAction({
    url: DUMMY_USER_LIST,
    onSuccess: () => {},
    method: GET_METHOD,
    type: GET_USER_LIST,
  });
