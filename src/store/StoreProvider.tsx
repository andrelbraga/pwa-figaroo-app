import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import login from "@/store/reducers/login";

import thunk from "redux-thunk";

const composeEnhancers = compose;

const rootReducer = combineReducers({
  login,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const StoreProvider = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default StoreProvider;
