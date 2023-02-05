import React, { useContext, useState } from 'react'
import { AnotherLoginButtons, LoginFormContainer, LoginFormHeader, RegisterOption, RegisterOptionButton } from './style'
import TextField from '../../Components/TextField'
import CheckBox from '../../Components/CheckBox'
import Button from '../../Components/Button'
import OrLine from '../../Components/OrLine'
import * as yup from 'yup'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../ContextApi/authContext'

export default function Index() {
    const value = useContext(AuthContext)

    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMeChack, setRememberMeChack] = useState(true);

    const onChangeUsername = (event) => {
        let value = event.target.value;
        setUsername(value)
    }
    const onChangePassword = ({ target }) => {
        let value = target.value;
        setPassword(value)

    }
    const onRememberMeClick = () => {
        setRememberMeChack(!(rememberMeChack));
    }

    let schema = yup.object().shape({
        username: yup.string().required().min(3).max(15),
        password: yup.string().matches("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$", "Write password in right form")
    });

    const onLoginSubmit = (e) => {
        e.preventDefault()
        try {
            schema.validate({
                username: username,
                password: password,
            }, { abortEarly: false })
                .then(_ => {
                    value.setToken(TOKEN)
                    navigate("/explore")
                })
        } catch (error) {
            console.log(error?.errors)

        }
    }



    return (
        <LoginFormContainer onSubmit={onLoginSubmit}>
            <LoginFormHeader>Sign in</LoginFormHeader>
            <TextField
                minLength={3}
                value={username}
                onChange={onChangeUsername}
            />
            <TextField
                minLength={6}
                value={password}
                placeholder={"Enter your Password"}
                onChange={onChangePassword}
                type={"password"}
                label={"Password"} />

            <CheckBox
                value={rememberMeChack}
                onClick={onRememberMeClick} />
            <Button
                onClick={onLoginSubmit} />
            <OrLine label={"OR"} />
            <AnotherLoginButtons>
                <Button
                    LoginWay={"google"}
                    label="Continue with Google"
                    labelColor="black"
                    BG={"white"}
                    onClick={onLoginSubmit} />
                <Button
                    LoginWay={"facebook"}
                    label="Continue with Facebook"
                    BG={"#4267B2"}
                    onClick={onLoginSubmit} />
            </AnotherLoginButtons>
            <RegisterOption >
                {`Don’t have an account?`}
                <NavLink to="register" style={{ textDecoration: 'none' }} >
                    <RegisterOptionButton>Register Now</RegisterOptionButton>
                </NavLink>
            </RegisterOption>
        </LoginFormContainer>
    )
}
