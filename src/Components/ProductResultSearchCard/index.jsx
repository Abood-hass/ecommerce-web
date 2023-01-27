import React from 'react'
import { ProductResultCardContainer, ProductResultCardInfo, ProductResultCardWishBtn, ProductResultDetails, ProductResultDiscountPrice, ProductResultName, ProductResultRealPrice, ProductResultViewDetailsBtn } from './style'
import ProductRate from '../ProductRate'

export default function Index(props) {
    return (
        <ProductResultCardContainer key={props.index} onClick={props.onClick}>
            <img src={props.img} />
            <ProductResultCardInfo>
                <ProductResultName children={props.name || "Product Name"} />
                <span>
                    <ProductResultDiscountPrice children={props.discountPrice || "20"} />
                    {" "}<ProductResultRealPrice children={props.realPrice || "30"} />
                </span>
                <ProductRate rate={props.rate} shippingPrice={props.shippingPrice} />
                <ProductResultDetails children={props.details || "Product"} />
                <ProductResultViewDetailsBtn />
            </ProductResultCardInfo>
            <ProductResultCardWishBtn />
        </ProductResultCardContainer>
    )
}
