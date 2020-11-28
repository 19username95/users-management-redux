import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { Title } from "../../components";
import JokeForm from "../../components/JokeForm/JokeForm";

const Jokes = ({ joke, isLoading }) => {
    return (
        <Fragment>
            <Title>Jokes about Chuck Norris</Title>
            <JokeForm joke={joke} isLoading={isLoading} />
        </Fragment>
    )
}

export default withRouter(Jokes);