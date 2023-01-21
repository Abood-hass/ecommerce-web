import React from 'react'
import LoginFooter from '../../../Components/LoginFooter'
import RegisterFormView from '../../../Components/RegisterFormView'
import { LoginPageContainer } from '../style'

export default function index() {
    return (
        <LoginPageContainer><RegisterFormView /><LoginFooter /></LoginPageContainer>
    )
}

