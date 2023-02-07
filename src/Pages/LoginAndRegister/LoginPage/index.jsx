import React from 'react'
import { useLocation } from 'react-router-dom'
import LoginFormView from '../../../Components/LoginFormView'

export default function Index() {
    const { state } = useLocation()
    return (
        <LoginFormView newUserInfo={state} />
    )
}

