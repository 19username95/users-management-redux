import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { UserInfo, Title } from "../../components";

class EditUser extends Component {
    submit = (user) => {
        this.props.showToast(
            `User #${user.id}: ${user.name} ${user.surname} successfully updated.`,
            'success'
        )
        this.props.editUser(user.id, user)
        this.props.history.push('/users-list')
    }

    render() {
        return (
            <Fragment>
                <Title>Update user</Title>
                <UserInfo submit={this.submit} user={this.props.user} />
            </Fragment>
        );
    }
}

export default withRouter(EditUser);
