import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Jokes } from "../containers";

const JokesPage = () => <Jokes />
    // editUser={editUser}
    // user={user}
    // showToast={showToast}

const mapStateToProps = (state, props) => ({
    // user: state.users.list[props.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
   // showToast: (message, type) => dispatch(showToast(message, type)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JokesPage))
