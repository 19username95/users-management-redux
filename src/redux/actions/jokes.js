import {JOKE_API_URL} from "./constants";

const loadJokeData = (payload) => ({
    type: "LOAD_JOKE_DATA",
    payload,
});

const loadJokeStart = () => ({
    type: "LOAD_JOKE_START",
});

const loadJokeSuccess = () => ({
    type: "LOAD_JOKE_SUCCESS",
});

const loadJokeFail = () => ({
    type: "LOAD_JOKE_FAIL",
});

export const loadJoke = () => {
    return (dispatch) => {
        dispatch(loadJokeStart());
        fetch(JOKE_API_URL)
            .then((res) => res.json())
            .then((joke) => {
                dispatch(loadJokeData(joke.value));
                dispatch(loadJokeSuccess());
            })
            .catch((e) => console.log(e));
    };
};