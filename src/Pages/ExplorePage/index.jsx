import React, { Suspense, useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MainViewHeader from '../../Components/MainViewHeader'
import MainViewFooter from '../../Components/MainViewFooter'
import { AuthCont } from '../../ContextApi/AuthReducer'

export default function Index() {
    const { checkToken, } = useContext(AuthCont)

    console.log(checkToken())
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
