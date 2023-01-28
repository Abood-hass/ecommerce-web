import styled from "styled-components";

export const CartViewItemContainer = styled.div`
    border: 1px solid #E3E8EE; 
    box-sizing:border-box;
    border-width: 0px 0px 1px 0px;
    display:flex;
    padding:10px 0px;
    gap:5px;
    &>img{
        height:80px;
        width:80px;
        object-fit: contain;
        box-sizing:border-box;
        padding:10px;
        border: 1px solid #E3E8EE;
        border-radius: 6px;
        background:#f7f7f7;
    }
`


export const CartViewItemInfo = styled.div`
    display:flex;
    flex-direction:column;
    width:85%;
    gap:10px;
    &>span{width:40%}
    &>span:nth-of-type(1){
        color: #1C1C1C;
        font-weight: 500;
        font-size: 18px;
    }
    &>span:nth-of-type(2){
        color: #8B96A5;
        font-weight: 300;
        font-size: 16px;
    }
`


export const CartViewPriceAndQty = styled.div`
    display:flex;
    flex-direction:column;
    align-items:right;
    text-align:right;
    gap:10px;
    &>div{position:relative;}
    &>div>select{
            background:#fff;
            border: 1px solid #E3E8EE;
            border-radius: 6px;
            padding-left: 40px;
            padding-top: 5px;
            padding-bottom: 3px;
            
        }
    &>div>span{
            user-select:none;
            font-size:14px;
            text-transform: uppercase; 
            position: absolute;
            bottom:5px;
            left:5px;
        }
    }
    &>span{
        font-weight: 500;
        font-size: 16px;
        &:before{
            content:"$";
        }
    }
`