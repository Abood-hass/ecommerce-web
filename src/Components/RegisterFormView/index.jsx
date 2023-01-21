import React from 'react'
import { LoginFormContainer, LoginFormHeader, RegisterOption, RegisterOptionButton, TwoInputsContainer } from '../LoginFormView/style'
import TextField from '../../Components/TextField'
import CheckBox from '../../Components/CheckBox'
import Button from '../../Components/Button'
import OrLine from '../../Components/OrLine'
import { Link } from 'react-router-dom'

export default function index() {
    return (

        <LoginFormContainer>
            <LoginFormHeader>Register</LoginFormHeader>

            <TwoInputsContainer>
                <TextField label={"Name"} placeholder={"Type here"} style={{ width: '48%' }} />
                <TextField label={"Surname"} placeholder={"Type here"} style={{ width: '48%' }} />
            </TwoInputsContainer>

            <TextField minLength={5} label={"Your e-mail"} placeholder={"example@mail.com"} />
            <TextField type={"tel"} label="Phone" placeholder={"000-0000"} />
            <TextField label={"Password"} placeholder={"At least 6 characters."} />
            <TextField label={"Repeat password"} placeholder={"Type here"} />
            <Button label="Register now" />
            <CheckBox label="I agree with " labelLink="Terms and Conditions" />
            <OrLine />
            <RegisterOption >
                {`Already have an accaunt?`}
                <Link to="/login" style={{ textDecoration: 'none' }} >
                    <RegisterOptionButton>Logn in</RegisterOptionButton>
                </Link>
            </RegisterOption>
        </LoginFormContainer>
    )
}
