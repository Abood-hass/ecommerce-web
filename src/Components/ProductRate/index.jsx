import React from 'react'
import { Dot, GrayStarIcon, OrdersNumber, RateProductContainer, ShippingTypePaid, ShippingTypeFree, StarIcon, StarsNumber } from './style'

export default function Index(props) {
    const rate = props.rate % 6
    return (
        <RateProductContainer>
            {[...(new Array(rate || 0))].map((item, index) => {
                return <StarIcon key={index} />
            })}
            {[...(new Array(5 - (rate || 0)))].map((item, index) => {
                return <GrayStarIcon key={index} />
            })}

            <StarsNumber children={rate || 0} />
            <Dot />
            <OrdersNumber children={props.ordersNumber || 0} />
            <Dot />
            {props.shippingPrice ? <ShippingTypePaid children={"Shipping for $" + props.shippingPrice} /> :
                <ShippingTypeFree />}
        </RateProductContainer>
    )
}
