import styled from "styled-components";
import iconHeart from '../../Assest/Images/icon-heart.png'

export const ProductResultCardContainer = styled.div`
    cursor:pointer;
    position:relative;
    display:grid;
    grid-template-columns: 20% 70%;
    width:100%;
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    box-sizing:border-box;
    padding: 20px;
    gap:30px;
    &>img{
        width:190px;
        height:190px;
        oblect-fit:contain;
        margin:auto;
    }
`
export const ProductResultCardInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    width:500px;
`
export const ProductResultName = styled.span`
    font-weight: 600;
    font-size: 16px;
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
`
export const ProductResultDetails = styled.span`
    flex-grow:0.3;
    font-weight: 350;
    font-size: 14px;
    color:#505050;
`
export const ProductResultViewDetailsBtn = styled.span.attrs(_ => ({ children: "View details" }))`
    font-weight: 500;
    font-size: 16px;
    color: #0D6EFD;
`
export const ProductResultCardWishIcon = styled.img.attrs(_ => ({ src: iconHeart }))`
    width:20px;
    height:20px;
    oblect-fit:contain;
    margin:auto;
    transition:all 100ms;
`
export const ProductResultCardWishBtn = styled.div.attrs(_ => ({
    children: <ProductResultCardWishIcon />
}))`
&:hover{
    &>img{
        width:25px;
        height:25px;
    }
}
    position:absolute;
    right:3%;
    top:3%;
    display:flex;
    width:40px;
    height:40px;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
`
