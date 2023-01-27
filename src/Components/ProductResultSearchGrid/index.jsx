import React from 'react'
import { GridCradContainer, ProductImg, ProductResultCardWishIcon, ProductResultDetails, ProductResultDiscountPrice, ProductResultRealPrice } from './style'
import ProductRate from '../ProductRate'

export default function index(props) {
    return (
        <GridCradContainer key={props.index} onClick={props.onClick}>
            <ProductResultCardWishIcon />
            <ProductImg src={props.img} />
            <div>
                <ProductResultDiscountPrice children={props.discountPrice} />
                <ProductResultRealPrice children={props.realPrice} />
            </div>
            <ProductRate rate={props.rate} hideShipping={true} />
            <ProductResultDetails children={props.details} />
        </GridCradContainer>
    )
}
