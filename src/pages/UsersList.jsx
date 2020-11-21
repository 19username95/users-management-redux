import React from 'react';
import {connect} from "react-redux";
import { UsersList } from "../components";

const UsersListPage = ({ users }) => <UsersList users={users}/>

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps)(UsersListPage);