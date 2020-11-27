import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {
    Box,
    Typography
} from "@material-ui/core";

class Jokes extends Component {
    render() {
        return (
            <Box>
                <Typography>
                    Hi from jokes
                </Typography>
            </Box>
        );
    }
}

export default withRouter(Jokes);