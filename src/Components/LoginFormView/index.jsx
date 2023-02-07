import React, { useEffect, useState } from 'react'
import { AnotherLoginButtons, ErrorMsg, LoginFormContainer, LoginFormHeader, RegisterOption, RegisterOptionButton } from './style'
import TextField from '../../Components/TextField'
import CheckBox from '../../Components/CheckBox'
import Button from '../../Components/Button'
import OrLine from '../../Components/OrLine'
import * as yup from 'yup'
import { NavLink, useNavigate } from 'react-router-dom'
import { CallAuthAPI } from '../../CustomHooks/CallAuthAPI'
import AuthContext from '../../ContextApi/AuthContext'

export default function Index({ newUserInfo }) {
    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [rememberMeChack, setRememberMeChack] = useState(true);

    useEffect(_ => {
        setUsername(newUserInfo?.email)
        setPassword(newUserInfo?.password)
    }, [])
    const onChangeUsername = (event) => {
        setErrorMsg("")
        let value = event.target.value;
        setUsername(value)
    }
    const onChangePassword = ({ target }) => {
        setErrorMsg("")
        let value = target.value;
        setPassword(value)

    }
    const onRememberMeClick = () => {
        setRememberMeChack(!(rememberMeChack));
    }
    let schema = yup.object().shape({
        username: yup.string().required().min(3).max(15),
        password: yup.string().required().min(6).max(20)
        // .matches("^(?=.*[A-Za-z])(?=.*)[A-Za-z]{6,20}$", "Write password in right form")
    });

    const { setToken } = AuthContext()
    const onLoginSubmit = (e) => {
        e.preventDefault()
        setErrorMsg("")
        try {
            schema.validate({
                username: username,
                password: password,
            }, { abortEarly: false })
                .then(async _ => {

                    setLoading(true)
                    const { error, userToken } = await CallAuthAPI({
                        email: username,
                        password: password,
                    })
                    setLoading(false)

                    if (userToken) {
                        setToken(userToken)

                        // AddToken(userToken)
                        navigate("/explore")

                    }
                    setErrorMsg(error)

                })
                .catch((error) => {
                    setErrorMsg(error.errors[0])

                })

        } catch (error) {
            console.log(error)

        }

    }



    return (
        <LoginFormContainer onSubmit={onLoginSubmit}>
            <LoginFormHeader>Sign in</LoginFormHeader>
            {errorMsg && <ErrorMsg children={errorMsg} />}
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
                loading={loading} />
            <OrLine label={"OR"} />
            <AnotherLoginButtons>
                <Button
                    LoginWay={"google"}
                    label="Continue with Google"
                    labelColor="black"
                    BG={"white"} />
                <Button
                    LoginWay={"facebook"}
                    label="Continue with Facebook"
                    BG={"#4267B2"} />
            </AnotherLoginButtons>
            <RegisterOption >
                {`Don't have an account?`}
                <NavLink to="register" style={{ textDecoration: 'none' }} >
                    <RegisterOptionButton>Register Now</RegisterOptionButton>
                </NavLink>
            </RegisterOption>
        </LoginFormContainer>
    )
}
