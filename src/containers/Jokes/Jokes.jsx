import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";
import {Button} from "@material-ui/core";
import { Title } from "../../components";
import JokeForm from "../../components/JokeForm/JokeForm";
import './Jokes.scss'

const Jokes = ({ joke, isLoading, getJoke }) => {
    return (
        <Fragment className='Jokes'>
            <Title>Jokes about Chuck Norris</Title>
            <JokeForm joke={joke}
                      isLoading={isLoading} />
            <Button onClick={getJoke} className='Jokes-Button'>Get more</Button>
        </Fragment>
    )
}

export default withRouter(Jokes);