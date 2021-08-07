import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import thunk from "redux-thunk";
import { AuthReducer } from "./AuthReducer/AuthReducer";

const rootReducer = combineReducers({
   auth: AuthReducer
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);