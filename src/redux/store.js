import {
    applyMiddleware,
    compose,
    createStore,
    combineReducers
} from "redux";
import { usersReducer, toastsReducer, jokesReducer } from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(
    combineReducers({
        users: usersReducer,
        toast: toastsReducer,
        joke: jokesReducer
    }),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);