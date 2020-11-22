import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { UserInfo, Title } from "../../components";
import IncrementService from "../../helpers/IncrementService";

class Registration extends Component {
    submit = (user) => {
        this.props.showToast(
            `User #${user.id}: ${user.name} ${user.surname} successfully added.`,
            'success'
        )
        this.props.addUser({
            ...user,
            id: IncrementService.getNextId(),
            registrationDate: new Date().toLocaleDateString()
        })
        this.props.history.push('/users-list')
    }

    render() {
        return (
            <Fragment>
                <Title>Add user</Title>
                <UserInfo submit={this.submit} />
            </Fragment>
        );
    }
}

export default withRouter(Registration);
