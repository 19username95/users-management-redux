import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { Title } from "../../components";
import JokeForm from "../../components/JokeForm/JokeForm";
import {Button} from "@material-ui/core";

const Jokes = ({ joke, isLoading, getJoke }) => {
    return (
        <Fragment>
            <Title>Jokes about Chuck Norris</Title>
            <JokeForm joke={joke} isLoading={isLoading} />
            <Button onClick={getJoke}>Get more</Button>
        </Fragment>
    )
}

export default withRouter(Jokes);