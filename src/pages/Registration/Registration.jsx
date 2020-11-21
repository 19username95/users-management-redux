import React, { Component } from 'react';
import {
    TextField,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    Button,
    Box
} from "@material-ui/core";
import InputMask from 'react-input-mask';
import './Registration.scss';
import Title from "../../components/Title/Title";
import { ToastCustomContainer }  from "../../components/Toast/Toast";


class Registration extends Component {
    render() {
        const {
            surname,
            sex,
            card,
            isLoyalty,
            coupon
        } = this.props.initState;
        return (
            <Box className='RegistrationSection'>
                <Title className='RegistrationSection-Title'>Add user</Title>
                <ToastCustomContainer />
                <form className='RegistrationForm'
                      onSubmit={this.props.handleSubmit}>
                    <TextField
                        className='RegistrationForm-Field RegistrationForm-Field_name'
                        name="name"
                        label="Name"
                        required
                        value={this.props.nameValue}
                        onChange={(e) =>
                            this.props.handleChangeName(e.target.value)}
                    />
                        <TextField
                    className='RegistrationForm-Field RegistrationForm-Field_surname'
                    name="surname"
                    label="Surname"
                    required
                    value={surname}
                    onChange={this.props.handleChange}
                        />
                    <FormControl component="fieldset"
                                 className=' RegistrationForm-RadioField RegistrationForm-Field_gender'
                                 required
                    >
                        <FormLabel className='RegistrationForm-RadioFieldLabel'
                                   component="legend">Gender</FormLabel>
                        <RadioGroup className='RegistrationForm-RadioFieldGroup'
                                    name="sex"
                                    value={sex}
                                    onChange={this.props.handleChange}>
                            <FormControlLabel className='RegistrationForm-RadioButton'
                                              value="female"
                                              control={<Radio />}
                                              label="Female" />
                            <FormControlLabel className='RegistrationForm-RadioButton'
                                              value="male"
                                              control={<Radio />}
                                              label="Male"/>
                            <FormControlLabel className='RegistrationForm-RadioButton'
                                              value="other"
                                              control={<Radio />}
                                              label="Other"/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl className='RegistrationForm-Field RegistrationForm-Field_card'>
                        <FormLabel className='RegistrationForm-CardLabel'
                                   component="legend">Credit card</FormLabel>
                        <InputMask
                            className='RegistrationForm-CardInput'
                            name="card"
                            label="Card"
                            value={card}
                            onChange={this.props.handleChange}
                            mask='9999 9999 9999 9999'
                            maskChar='_'
                            alwaysShowMask='true'/>
                    </FormControl>

                    <FormControlLabel
                        className='RegistrationForm-Field RegistrationForm-Field_isLoyalty'
                        control={
                        <Checkbox checked={isLoyalty}
                                  name="isLoyalty"
                                  onChange={this.props.handleChange}/>
                        }
                        label='Loyalty program'/>
                    {isLoyalty ?
                    <TextField
                        className='RegistrationForm-Field RegistrationForm-Field_coupon'
                        name="coupon"
                        label="Coupon"
                        required
                        value={coupon}
                        onChange={this.props.handleChange}/>
                        : null}
                    <Button
                        className='RegistrationForm-Button'
                        type='submit'
                    >
                        Create
                    </Button>
                </form>
            </Box>
        );
    }
}

export default Registration