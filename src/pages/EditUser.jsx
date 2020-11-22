import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { EditUser } from "../containers";
import { editUser } from "../redux/actions/users";
import { showToast } from "../redux/actions/toasts";

const EditUserPage = ({ editUser, showToast, user }) => <EditUser
    editUser={editUser}
    user={user}
    showToast={showToast}
/>

const mapStateToProps = (state, props) => ({
    user: state.users.list[props.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    editUser: (id, user) => dispatch(editUser(id, user)),
    showToast: (message, type) => dispatch(showToast(message, type)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUserPage))
