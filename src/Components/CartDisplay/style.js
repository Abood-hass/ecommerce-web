import styled from "styled-components";
import { LightBlue } from "../ColorSchema";

export const CartViewContainer = styled.div`
    width:100%;
    &>div{
        display:grid;
        grid-template-columns: 80% 20%;
        gap:20px;
    }
`


export const CartViewItemList = styled.div`
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    padding:20px;
`



export const CouponInput = styled.div`
    display:flex;
    gap:0px;
    margin-top: 10px;
    &>*{
        background: #FFFFFF;
        border: 1px solid #E0E0E0;
        height:40px;
        color:${LightBlue};
        box-sizing:border-box;
    }
    &>input{
        border-radius: 6px 0px 0px 6px;
        border-width: 1px 0px 1px 1px;
    }
    &>button{ 
        border-radius: 0px 6px 6px 0px;
        width:100px;
        &:hover{
            color:#fff;
            background:${LightBlue};
            transition:all .2s;
        }
    }
`

export const PriceData = styled.div`
    display:flex;
    justify-content:space-between;
    color: #505050;
     &>span:nth-of-type(1){
        &:after{content:":"}
    }
    &>span:nth-of-type(2){
        &>span:before{content:"$"}
    }
`

export const PriceDataTax = styled.span`
    &:before{content:"- "}
    color:red
`

export const PriceDataDiscount = styled.span`
    &:before{content:"+ "}
    color:green
`