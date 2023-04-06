import React from "react";
import {  shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer as formReducer } from "redux-form";

const store = createStore(() => ({
  form: formReducer,
}));

const withProviders = node => (
  <Provider store={store}>
    {node}
  </Provider>
);

export const mountWithProviders = (node, options) =>
  shallow(withProviders(node), options);