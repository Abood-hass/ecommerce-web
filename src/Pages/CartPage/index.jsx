import React from 'react'
import MainViewHeader from '../../Components/MainViewHeader'
import { CartPageContianer } from './style'
import CartDisplay from '../../Components/CartDisplay'
import MainViewFooter from '../../Components/MainViewFooter'
import SuperDiscount from '../../Components/SuperDiscount'
import RelatedProducts from '../../Components/RelatedProducts'

export default function index() {
    return (
        <>
            <MainViewHeader HideSearchBar HideSecond />
            <CartPageContianer>
                <CartDisplay />
                <SuperDiscount />
                <RelatedProducts />
            </CartPageContianer>
            <MainViewFooter />
        </>
    )
}
