import React from 'react'
import { Dot, GrayStarIcon, OrdersNumber, RateProductContainer, ShippingTypePaid, ShippingTypeFree, StarIcon, StarsNumber, ReviewsNumber, SoldsNumber } from './style'
import IconsComments from '../../Assest/Images/icons-comments.png'
import IconsShopaholic from '../../Assest/Images/icon-shopaholic.png'

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

            {props.basicsInfo ? <><Dot /><img src={IconsComments} style={{ height: '18px' }} alt="" />
                <ReviewsNumber children={props.reviewsNumber || 4} />
                <Dot /><img src={IconsShopaholic} style={{ height: '18px' }} alt="" />
                <SoldsNumber children={props.soldsNumber || 10} />
            </> :
                <> <Dot /><OrdersNumber children={props.ordersNumber || 10} /></>}

            {!props.basicsInfo && !props.hideShipping && (props.shippingPrice ? <> <Dot /><ShippingTypePaid children={"Shipping for $" + props.shippingPrice} /> </> :
                <> <Dot /><ShippingTypeFree /></>)}
        </RateProductContainer>
    )
}
