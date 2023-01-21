import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginFooter from '../../Components/LoginFooter'
import { LoginPageContainer } from './style'

export default function Index() {
    return (
        <LoginPageContainer ><Outlet /><LoginFooter /></LoginPageContainer >
    )
}
