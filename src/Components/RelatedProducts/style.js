import styled from "styled-components";

export const RelatedProductsGroup = styled.div`
    background: #FFFFFF;  
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    gap:10px;
    padding: 20px;
    width:100%;
    height:fit-content;
    &>span{
        font-weight: 600;
        font-size: 20px;
    }
    &>div{
        display:flex;
        margin-top:10px;
        align-items: center;
        justify-content:space-around;
        gap:20px; 
        width:100%;
    }
`


export const RelatedProductsItem = styled.div`
        padding: 5px;
        display:flex;
        align-items: left;
        justify-content:space-between;
        flex-direction:column;
        width: 180px;
        border-radius:6px;
        box-sizing: border-box;
        gap:10px;
        &>img{
            width: 100%;
            object-fit: contain;
            box-sizing: border-box;
            padding: 15px;
            background: #eee;
            border-radius:6px; 
        }
        &>span{
            width:70%;
            font-weight: 400;
            font-size: 16px;
            color: #505050;
        }
        
`


export const RelatedProductsPrice = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: #8B96A5;
    &>span:nth-of-type(1),
    &>span:nth-of-type(3){
        &:before{content:"$"}
    }
`