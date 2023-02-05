import React from 'react'
import { LoginFormContainer, LoginFormHeader, RegisterOption, RegisterOptionButton, TwoInputsContainer } from '../LoginFormView/style'
import TextField from '../../Components/TextField'
import CheckBox from '../../Components/CheckBox'
import Button from '../../Components/Button'
import OrLine from '../../Components/OrLine'
import { NavLink } from 'react-router-dom'
import * as yup from 'yup'
import { useState } from 'react'

export default function Index() {
    const [inputsData, setInputsData] = useState(
        [
            { id: "name", value: "" },
            { id: "surname", value: "" },
            { id: "email", value: "" },
            { id: "phone", value: "" },
            { id: "password", value: "" },
            { id: "repeatPassword", value: "" },
            { id: "checkbox", value: false },
        ]
    )

    const changeLoop = (id, value) => {
        let val = { id, value: value };
        setInputsData(prevState => prevState.map(input => input.id === id ? val : input))
    }

    const changeName = ({ target }) => {
        changeLoop("name", target.value)
    }

    const changeSurName = ({ target }) => {
        changeLoop("surname", target.value)
    }

    const changeEmail = ({ target }) => {
        changeLoop("email", target.value)
    }

    const changePhone = ({ target }) => {
        if ((target.value).charAt(target.value.length - 1) % 1 === 0) {
            changeLoop("phone", target.value)
        }
    }

    const changePassword = ({ target }) => {
        changeLoop("password", target.value)
    }

    const changeRepeatPassword = ({ target }) => {
        changeLoop("repeatPassword", target.value)
    }

    const changeCheckbox = () => {
        changeLoop("checkbox", !inputsData[6].value)
    }


    let schema = yup.object().shape({
        name: yup.string().required().min(3).max(15),
        surname: yup.string().required().min(3).max(15),
        email: yup.string().email(),
        phone: yup.string().length(7),
        // password: yup.string().matches("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$", "Write password in right form"),
        repeatedPassword: yup.string().test('confirm password', 'Repeated Password Should be exacly like Password', (value) => inputsData[4].value === value),
        termsAndConditions: yup.boolean().test('check terms', 'Terms should be checked', (value) => value),
    });

    const onRegisterSubmit = (e) => {
        e.preventDefault()
        try {
            schema.validateSync({
                name: inputsData[0].value,
                surname: inputsData[1].value,
                email: inputsData[2].value,
                phone: inputsData[3].value,
                password: inputsData[4].value,
                repeatedPassword: inputsData[5].value,
                termsAndConditions: inputsData[6].value,
            }, { abortEarly: false })

        } catch (error) {
            console.log(error.errors)
        }

    }

    return (

        <LoginFormContainer onSubmit={onRegisterSubmit}>
            <LoginFormHeader>Register</LoginFormHeader>

            <TwoInputsContainer>
                <TextField onChange={changeName} value={inputsData[0].value} minLength={3} maxLength={15} label={"Name"} placeholder={"Type here"} style={{ width: '48%' }} />
                <TextField onChange={changeSurName} value={inputsData[1].value} minLength={3} maxLength={15} label={"Surname"} placeholder={"Type here"} style={{ width: '48%' }} />
            </TwoInputsContainer>

            <TextField onChange={changeEmail} value={inputsData[2].value} minLength={3} label={"Your e-mail"} placeholder={"example@mail.com"} />
            <TextField onChange={changePhone} value={inputsData[3].value} minLength={7} maxLength={7} type={"tel"} label="Phone" placeholder={"000-0000"} />
            <TextField onChange={changePassword} value={inputsData[4].value} minLength={6} label={"Password"} placeholder={"At least 6 characters."} />
            <TextField onChange={changeRepeatPassword} value={inputsData[5].value} minLength={6} label={"Repeat password"} placeholder={"Type here"} />
            <Button label="Register now" />
            <CheckBox onClick={changeCheckbox} value={inputsData[6].value} label="I agree with " labelLink="Terms and Conditions" />
            <OrLine />
            <RegisterOption >
                {`Already have an account?`}
                <NavLink to="/user" style={{ textDecoration: 'none' }} >
                    <RegisterOptionButton>Logn in</RegisterOptionButton>
                </NavLink>
            </RegisterOption>
        </LoginFormContainer>
    )
}
