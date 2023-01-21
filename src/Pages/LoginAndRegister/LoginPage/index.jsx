import React from 'react'
import LoginFooter from '../../../Components/LoginFooter'
import LoginFormView from '../../../Components/LoginFormView'
import { LoginPageContainer } from '../style'

export default function index() {
    return (
        <LoginPageContainer><LoginFormView /><LoginFooter /></LoginPageContainer>
    )
}

