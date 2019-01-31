/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";

import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";

import Home from "./screen/Home";
import store from "./config/stores";

EStyleSheet.build();

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
