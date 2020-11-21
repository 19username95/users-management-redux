import React from 'react';
import {connect} from "react-redux";
import UsersList from "../../components/UsersList/UsersList";

const UsersListPage = ({ userList }) => <UsersList users={userList}/>

const mapStateToProps = (state) => ({
    usersList: state.users
})

export default connect(mapStateToProps)(UsersListPage);