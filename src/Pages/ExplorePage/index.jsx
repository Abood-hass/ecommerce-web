import React, { Fragment, useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MainViewHeader from '../../Components/MainViewHeader'
import MainViewFooter from '../../Components/MainViewFooter'
import { AuthContext } from '../../ContextApi/authContext'

export default function Index() {
    const value = useContext(AuthContext)

    return (
        (value.token) ?
            <>
                <MainViewHeader />
                <Outlet />
                <MainViewFooter />

            </>
            : <Navigate to="/" replace={true} />


    )
}
