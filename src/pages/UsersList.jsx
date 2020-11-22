import React from 'react';
import {connect} from "react-redux";
import { UsersList } from "../containers";

const UsersListPage = ({ users }) => <UsersList users={users}/>

const mapStateToProps = (state) => ({
    users: Object.values(state.users.list)
})

export default connect(mapStateToProps)(UsersListPage);