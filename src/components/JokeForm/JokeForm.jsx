import React from 'react';
import {Box, CircularProgress, Typography} from "@material-ui/core";

const JokeForm = ({ joke, isLoading }) => {
    return (
    <Box>
        {isLoading ? <CircularProgress/> : <Typography>{joke}</Typography>}
    </Box>
    )
}

export default JokeForm;