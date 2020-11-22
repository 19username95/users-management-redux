import React, { Component } from 'react';
import {
    TextField,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    RadioGroup,
    Radio,
    Button,
    Box
} from "@material-ui/core";
import InputMask from 'react-input-mask';
import _ from 'lodash';
import './UserInfo.scss';
import { validateUser } from '../../helpers/validator'

const initData = {
    name: "",
    surname: "",
    sex: "",
    card: "",
    isLoyalty: false,
    coupon: ""
};

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = { ...(props.user || initData), errors: {} };
    }

    handleChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;

        // hide error message
        const { errors } = this.state
        delete errors[target.name]

        this.setState({
            [target.name]: value,
            errors
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const user = _.pick(this.state, [
            'id',
            'name',
            'surname',
            'sex',
            'card',
            'isLoyalty',
            'coupon'
        ])

        const errors = validateUser(user)
        if (Object.keys(errors).length) {
            return this.setState({ errors })
        }

        return this.props.submit(user);
    };

    render() {
        const {
            name,
            surname,
            sex,
            card,
            isLoyalty,
            coupon,
            errors
        } = this.state;

        return (
            <Box className='UserInfoSection'>
                <form className='UserInfoForm'
                      onSubmit={this.handleSubmit}>
                    <TextField
                        className='UserInfoForm-Field UserInfoForm-Field_name'
                        name="name"
                        label="Name"
                        required
                        value={name}
                        onChange={this.handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        className='UserInfoForm-Field UserInfoForm-Field_surname'
                        name="surname"
                        label="Surname"
                        required
                        value={surname}
                        onChange={this.handleChange}
                        error={!!errors.surname}
                        helperText={errors.surname}
                    />
                    <FormControl component="fieldset"
                                 className=' UserInfoForm-RadioField UserInfoForm-Field_gender'
                                 required
                                 error={!!errors.sex}
                    >
                        <FormLabel className='UserInfoForm-RadioFieldLabel'
                                   component="legend">Gender</FormLabel>
                        <RadioGroup className='UserInfoForm-RadioFieldGroup'
                                    name="sex"
                                    value={sex}
                                    onChange={this.handleChange}>
                            <FormControlLabel className='UserInfoForm-RadioButton'
                                              value="female"
                                              control={<Radio />}
                                              label="Female" />
                            <FormControlLabel className='UserInfoForm-RadioButton'
                                              value="male"
                                              control={<Radio />}
                                              label="Male"/>
                            <FormControlLabel className='UserInfoForm-RadioButton'
                                              value="other"
                                              control={<Radio />}
                                              label="Other"/>
                        </RadioGroup>
                        {!!errors.sex ? <FormHelperText>{errors.sex}</FormHelperText> : null}
                    </FormControl>
                    <FormControl className='UserInfoForm-Field UserInfoForm-Field_card'>
                        <FormLabel className='UserInfoForm-CardLabel'
                                   component="legend">Credit card</FormLabel>
                        <InputMask
                            className='UserInfoForm-CardInput'
                            name="card"
                            label="Card"
                            value={card}
                            onChange={this.handleChange}
                            mask='9999 9999 9999 9999'
                            maskChar='_'
                            alwaysShowMask='true'/>
                    </FormControl>

                    <FormControlLabel
                        className='UserInfoForm-Field UserInfoForm_isLoyalty'
                        control={
                            <Checkbox checked={isLoyalty}
                                      name="isLoyalty"
                                      onChange={this.handleChange}/>
                        }
                        label='Loyalty program'/>
                    {isLoyalty ?
                        <TextField
                            className='UserInfoForm-Field UserInfoForm_coupon'
                            name="coupon"
                            label="Coupon"
                            required
                            value={coupon}
                            onChange={this.handleChange}/>
                        : null}
                    <Button
                        className='UserInfoForm-Button'
                        type='submit'
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        );
    }
}

export default UserInfo;
