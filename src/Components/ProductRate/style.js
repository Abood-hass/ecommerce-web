import styled from "styled-components";
import starImg from '../../Assest/Images/star-rate.png'
import grayStarImg from '../../Assest/Images/gray-star-rate.png'
import dot from '../../Assest/Images/dot.png'

export const RateProductContainer = styled.div`
    &>span{
        margin: 0px 10px;
    }

    display:felx;
    align-items:center;
    height:20px;
    width:fit-content; 
`
export const StarIcon = styled.img.attrs(_ => ({ src: starImg }))`
    height:16px;
    width:16px;
    object-fit:contain;
`
export const GrayStarIcon = styled.img.attrs(_ => ({ src: grayStarImg }))`
    height:16px;
    width:16px;
    object-fit:contain;
`
export const StarsNumber = styled.span` 
    color: #FF9017;
    font-size: 16px;
`
export const Dot = styled.img.attrs(_ => ({ src: dot }))`
    height:8px;
    width:8px;
    object-fit:contain;
`
export const OrdersNumber = styled.span`
    &:after{
        content:" orders"
    } 
    color: #8B96A5;
    font-size: 16px;
`


export const ShippingTypeFree = styled.span.attrs(_ => ({ children: "Free Shipping" }))`
    color: #00B517;
    font-size: 14px;
`

export const ShippingTypePaid = styled.span`
    color: #8B96A5;
    font-size: 14px;
`

