import React from 'react'
import { Outlet } from 'react-router-dom'
import MainViewHeader from '../../Components/MainViewHeader'
import SubscribeBar from '../../Components/SubscribeBar'
import MainViewFooter from '../../Components/MainViewFooter'

export default function Index() {
    return (
        <>
            <MainViewHeader />
            <Outlet />
            <SubscribeBar />
            <MainViewFooter />
        </>
    )
}
