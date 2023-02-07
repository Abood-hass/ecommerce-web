import React, { Suspense, useContext } from 'react'
import MainViewHeader from '../../Components/MainViewHeader'
import MainViewFooter from '../../Components/MainViewFooter'
import { CartPageContianer } from './style'
import { Navigate } from 'react-router-dom'

const CartDisplay = React.lazy(() => import('../../Components/CartDisplay'));
const SuperDiscount = React.lazy(() => import('../../Components/SuperDiscount'));
const RelatedProducts = React.lazy(() => import('../../Components/RelatedProducts'));

export default function Index() {
    // const value = useContext(AuthContext)
    return (

        // (value.token) ?
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
