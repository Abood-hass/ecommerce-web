import React, { Suspense } from 'react'
import MainViewHeader from '../../Components/MainViewHeader'
import MainViewFooter from '../../Components/MainViewFooter'
import { CartPageContianer } from './style'
// import { Navigate } from 'react-router-dom'
// import AuthContext from '../../ContextApi/AuthContext'

const CartDisplay = React.lazy(() => import('../../Components/CartDisplay'));
const SuperDiscount = React.lazy(() => import('../../Components/SuperDiscount'));
const RelatedProducts = React.lazy(() => import('../../Components/RelatedProducts'));

export default function Index() {
    // const { checkToken } = AuthContext()
    return (
        // (checkToken()) ?
        <>
            <MainViewHeader HideSearchBar HideSecond />
            <Suspense fallback={<div>Loading ...</div>}>
                <CartPageContianer>
                    <CartDisplay />
                    <SuperDiscount />
                    <RelatedProducts />
                </CartPageContianer>
            </Suspense>
            <MainViewFooter />
        </>
        // : <Navigate to="/" replace={true} />

    )
}
