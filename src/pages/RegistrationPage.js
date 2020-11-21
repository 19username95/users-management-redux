import React, {Component} from 'react';
import Registration from "./Registration/Registration";
import _ from "lodash";
import IncrementService from "../helpers/IncrementService";
import toast from "../components/Toast/Toast";
import {addUser, changeName} from "../actions/actions";
import {connect} from "react-redux";

const initData = {
    name: "",
    surname: "",
    sex: "",
    card: "",
    isLoyalty: false,
    coupon: ""
};

class RegistrationPage extends Component {
    constructor(props) {
        super(props);

        this.state = { ...initData };
    }

    handleChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [target.name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            ..._.pick(this.state, [
                'surname',
                'sex',
                'card',
                'isLoyalty',
                'coupon'
            ]),
            id: IncrementService.getNextId(),
            registrationDate: new Date().toLocaleDateString()
        }

        this.props.addUser(user);

        toast.success(`User #${user.id}: ${user.name} ${user.surname} successfully added.`)

        return this.setState({...initData});
    };

    render() {
        return (
            <div>
                <Registration
                    initState={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleChangeName={this.props.changeName}
                    nameValue={this.props.name}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    name: state.name,
})

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (userData) => dispatch(addUser(userData)),
        changeName: (name) => dispatch(changeName(name))
    };
}

export default connect(null, mapDispatchToProps)(RegistrationPage)