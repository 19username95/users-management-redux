import React from 'react';
import {Box, CircularProgress, Typography} from "@material-ui/core";
import './JokeForm.scss'

const JokeForm = ({ joke, isLoading }) => {
    return (
    <Box className='Joke'>
        {isLoading ? <CircularProgress/> : <Typography>{joke}</Typography>}
    </Box>
    )
}

export default JokeForm;