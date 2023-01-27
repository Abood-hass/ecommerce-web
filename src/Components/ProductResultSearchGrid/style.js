import styled from "styled-components";
import iconHeart from '../../Assest/Images/icon-heart.png'

export const GridCradContainer = styled.div`
    cursor:pointer;
    display:flex;
    align-items:left;
    flex-direction:column;
    position:relative;
    box-sizing:border-box;
     height: 420px;
    width: 300px;  
    background: #FFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    padding:15px 25px;
    gap:10px; 
`
export const ProductImg = styled.img`
    width:230px;
    height:230px;
    object-fit:contain;
    margin:auto;
`

export const ProductResultCardWishIcon = styled.img.attrs(_ => ({ src: iconHeart }))`
    position:absolute;
    width:20px;
    height:20px;
    oblect-fit:contain;
    margin:auto;
    right:5%;
    bottom:30%;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    padding:3px;
`

export const ProductResultDiscountPrice = styled.span`
    &:before{
        content:"$";
    }
    font-size: 20px;
    font-weight: 600;
`
export const ProductResultRealPrice = styled.span`
    &:before{
        content:"$";
    }
    text-decoration-line: line-through; 
    color: #8B96A5;
    font-size: 16px;
    font-weight: 600;
    margin-left:5px;
`
export const ProductResultDetails = styled.span`
    flex-grow:0.3;
    font-weight: 350;
    font-size: 14px;
    color:#505050;
    overflow:hidden;
`