import React, { useState } from 'react'
import { AnotherLoginButtons, LoginFormContainer, LoginFormHeader, RegisterOption, RegisterOptionButton } from './style'
import TextField from '../../Components/TextField'
import CheckBox from '../../Components/CheckBox'
import Button from '../../Components/Button'
import OrLine from '../../Components/OrLine'
import { Link } from 'react-router-dom'

export default function Index() {

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
    const onLoginSubmit = (event) => {
        event.preventDefault()
    }


    return (
        <LoginFormContainer>
            <LoginFormHeader>Sign in</LoginFormHeader>
            <TextField
                minLength={6}
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
                <Link to="/register" style={{ textDecoration: 'none' }} >
                    <RegisterOptionButton>Register Now</RegisterOptionButton>
                </Link>
            </RegisterOption>
        </LoginFormContainer>
    )
}
