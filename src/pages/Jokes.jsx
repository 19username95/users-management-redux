import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Jokes } from "../containers";
import {loadJoke} from "../redux/actions/jokes";

class JokesPage extends Component {
    componentDidMount() {
        this.props.loadJoke();
    }

    render() {
        return (
            <Jokes joke={this.props.joke}
                   isLoading={this.props.isLoading}
                   getJoke={this.props.loadJoke}/>
        );
    }
}

const mapStateToProps = (state) => ({
    joke: state.joke.value,
    isLoading: state.joke.isLoading,
});

const mapDispatchToProps = (dispatch) => {
    return {
        loadJoke: () => dispatch(loadJoke()),
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JokesPage))
