import styled from "styled-components";
import { LightBlue } from "../ColorSchema";

export const ProductViewBasicsInfo = styled.div`
    flex-wrap: wrap;
    width:100%;
    height: fit-content;
    display:grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    background: #FFFFFF; 
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    box-sizing:border-box; 
    padding:20px;
`
export const ProductViewImage = styled.img`
    height: 380px;
    width: 380px; 
    background: #FFFFFF; 
    border: 1px solid #E3E8EE;
    box-sizing:border-box;
    border-radius: 6px;
    padding:10px;
`

export const ProductViewImagesViewer = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px; 
`
export const ProductViewImagesGroup = styled.div`
    &>img{
        height: 50px;
        width: 50px;
        padding: 10px;
        background: #FFFFFF; 
        border: 1px solid #E3E8EE;
        border-radius: 6px;
        boxsizing:border-box;
    }
    display:flex;
    overflow-x:scroll;
    gap:20px;
    max-width:100%;
    &::-webkit-scrollbar {
        width: 0px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: ${LightBlue};
    border-radius: 10px;
        width: 5px;
    border: 5px solid #ffff;
  }
`
export const ProductViewInfoAndPrice = styled.div`
    display:flex;
    flex-direction:column;
    gap:15px;
    mix-height: 80%;
    // width: 100%;
    &>span{
        font-weight: 600;
        font-size: 20px;
    }
`

export const ProductViewPriceForPisces = styled.div`
    display:grid;
    grid-template-columns: repeat(3,auto); 
    padding:10px;
    background: #FFF0DF;
    align-items:center;
    gap:10px;
    &>div:nth-of-type(1){
        color:#FA3434;
    } 
    &>div:nth-of-type(3)
    {
        border: none;
    }
    &>div{
        display:flex;
        flex-direction:column;
        height: 44px; 
        border: 1px solid #BDC1C8;
        border-width: 0px 1px 0px 0px; 
        font-weight: 600;
        font-size: 18px;
        
        &>span:nth-of-type(1):before{
            content:"$";
        }
        &>span:nth-of-type(2){
            color:black;
            &:after{
                content:" pcs";
            }
            font-weight: 400;
            font-size: 13px;
        }
   
    }
`

export const ProductViewRowInfo = styled.div`
    display:grid;
    grid-template-columns:  40% 60%; 
    &>span:nth-of-type(1){
        color:#8B96A5;
        &:after{
            content:":";
        }
    } 
    &>span:nth-of-type(2)
    {
        font-weight: 300;
        color:black;
    }
`


export const ProductViewSpliterInfo = styled.hr`
    width:100%;
    margin:0%;
    border: 1px solid #E0E0E0;
`

export const SupplierInfo = styled.div`
    padding:20px;
    height: 325px;
    width: 300px; 
    background: #FFFFFF; 
    border: 1px solid #E3E8EE;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    box-sizing: border-box;
`

export const SupplierName = styled.div`
    display:flex;
    height:85px;
    width:100%;
    gap:20px;
    &>span{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
    }
    &>img{
        width:50px;
        height:50px;
        objcect-fit:contain;
    }
`

export const SupplierAddress = styled.div`
    margin:10px 0px;
    display:flex;
    flex-direction:column;
    gap:20px;
`

export const SupplierInfoRow = styled.div` 
    display:flex;
    gap:30px;
    &>img{
        width:25px;
        object-fit:contain;
    }
    &>span{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color:#8B96A5;
    }
`

export const SupplierRequestBn = styled.div` 
    display:flex;
    flex-direction:column;
    gap:5px;
`