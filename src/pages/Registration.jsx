import React from 'react';
import { connect } from "react-redux";
import { Registration } from "../containers";
import { addUser } from "../redux/actions/users";
import { showToast } from "../redux/actions/toasts";

const RegistrationPage = ({ addUser, showToast }) => <Registration
    addUser={addUser}
    showToast={showToast}
/>

const mapDispatchToProps = (dispatch) => ({
    addUser: (userData) => dispatch(addUser(userData)),
    showToast: (message, type) => dispatch(showToast(message, type)),
})

export default connect(null, mapDispatchToProps)(RegistrationPage)
