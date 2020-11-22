import {createStore, combineReducers} from "redux";
import { usersReducer, toastsReducer } from "./reducers";

export const store = createStore(
    combineReducers({
        users: usersReducer,
        toast: toastsReducer
    }),
      window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
);