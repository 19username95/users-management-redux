import React from 'react';
import { connect } from "react-redux";
import { Registration } from "../components";
import { addUser } from "../actions/actions";

const RegistrationPage = ({ addUser }) => <Registration addUser={addUser} />

const mapDispatchToProps = (dispatch) => ({
    addUser: (userData) => dispatch(addUser(userData)),
})

export default connect(null, mapDispatchToProps)(RegistrationPage)
