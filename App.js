/*
 * @Author: Rishav G
 * @Date: 2020-06-19 18:12:14
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 18:12:34
 **/
// polyfills
import "react-native-console-time-polyfill";

import React from "react";

//  redux
import { Provider } from "react-redux";

// store
import configureStore from "./src/redux/store";

// routes
import Routes from "./src/config/Routes";

export default App = () => (
  <Provider store={configureStore()}>
    <Routes />
  </Provider>
);
