import React, {Component} from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools }  from 'redux-devtools-extension';
import thunkMiddleware          from 'redux-thunk';
import reducer                  from './reducer/reducer';

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
  )
);

// create a store creator
const makeStore = (initialState) => {
    return createStore(reducer, initialState, enhancer);
};
export default makeStore;