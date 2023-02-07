import React, { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MainViewHeader from '../../Components/MainViewHeader'
import MainViewFooter from '../../Components/MainViewFooter'
import AuthContext from '../../ContextApi/AuthContext'

export default function Index() {
    const { checkToken } = AuthContext()
    return (
        (checkToken()) ?
            <>
                <MainViewHeader />
                <Suspense fallback={<div>Loading ...</div>}>
                    <Outlet />
                </Suspense >
                <MainViewFooter />
            </>
            : <Navigate to="/" replace={true} />
    )
}
