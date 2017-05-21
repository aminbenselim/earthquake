import { createStore, applyMiddleware } from "redux";
import dataReducers from "../reducers/reducers";
import thunk from "redux-thunk";

const enhancer = applyMiddleware(thunk);

export default function configureStore(initialState = {}) {
  return createStore(dataReducers, initialState, enhancer);
}
