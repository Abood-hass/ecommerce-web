import React, { useContext } from 'react'
import MainViewHeader from '../../Components/MainViewHeader'
import { CartPageContianer } from './style'
import CartDisplay from '../../Components/CartDisplay'
import MainViewFooter from '../../Components/MainViewFooter'
import SuperDiscount from '../../Components/SuperDiscount'
import RelatedProducts from '../../Components/RelatedProducts'
import { AuthContext } from '../../ContextApi/authContext'
import { Navigate } from 'react-router-dom'

export default function Index() {
    const value = useContext(AuthContext)

    return (

        (value.token) ?
            <>
                <MainViewHeader HideSearchBar HideSecond />
                <CartPageContianer>
                    <CartDisplay />
                    <SuperDiscount />
                    <RelatedProducts />
                </CartPageContianer>
                <MainViewFooter />
            </>
            : <Navigate to="/" replace={true} />

    )
}
