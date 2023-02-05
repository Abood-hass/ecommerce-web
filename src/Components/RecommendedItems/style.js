import { useState } from "react";
import styled from "styled-components";
import { LightBlue } from "../ColorSchema";

export const RecommendedList = styled.div`
    display:flex;
    flex-direction:column;
`

export const RecommendedHeader = styled.div`  
    font-size: 24px;
    font-weight: 600; 
    text-align: left;
    width:100%;
`

export const RecommendedGroupItems = styled.div`
    margin: 30px -30px;
    overflow:hidden;
    display:grid;
    grid-template-columns: repeat(5,auto);
    row-gap: 50px; 
    column-gap:  0px; 
`

export const RecommendedGroupColumn = styled.div`
    display:flex;
    flex-direction:column;
`

export const RecommendedItem = styled.div`
    cursor:pointer;
    background: #fff;
    position:relative;
    border: 1px solid #E0E0E0;
    border-radius: 6px;    
    display:flex;
    gap: 20px;
    flex-direction:column;
    align-items:center;
    text-align:left;
    height: 310px;
    width: 15vw; 
    margin:auto;
    box-sizing:border-box;
    padding: 20px 20px  15px 20px;
    @media (max-width: 1050px){
        height: 250px;
    }
`

export const RecommendedItemImage = styled.img` 
     width:150px; 
     hieght:150px;
    object-fit: containe;
    @media (max-width: 1050px){
        width:100px; 
        hieght:100px;
    }
`

export const RecommendedItemPrice = styled.span` 
    &:before{
        content:"$";
    }
    font-size: 16px;
    text-align:left;
    width:100%;
    font-weight: 500;  
    text-align: center;
     
`

export const RecommendedItemName = styled.span` 
    font-size: 16px;
    font-weight: 400; 
    color:#8B96A5;
    @media (max-width: 1050px){
        font-size: 12px;
    }
`


export const RecommendedItemAddToCartBox = styled.div`
    display:flex;
    border-radius: 6px;    
    position:absolute;
    bottom: 0%;
    left:0%;
    width:100%;
    height:  0px;
    overflow:hidden;
    transition: all 300ms;
    background: ${LightBlue}50;
    box-sizing:border-box;
    padding:0px 15px;
    color:#fff;
`

export const RecommendedItemAddToCartBtn = styled.button.attrs(_ => ({ children: "Add to the Cart" }))`
&:hover{
    background: #000;
    color: #fff;

}
    z-index:9;
    height: 30px;
    margin:auto;
    border: none;
    background: #fff;
    border-radius: 6px;    
    padding: 8px 10px;
`


export const RecommendedItemCard = (props) => {

    const hover = { height: '200px' }
    const [mouseEnter, setMouseEnter] = useState(false);

    return <RecommendedItem onClick={props.onClick} onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>
        <RecommendedItemAddToCartBox style={mouseEnter ? hover : {}}>
            <p>
                Info about product
            </p>
        </RecommendedItemAddToCartBox>
        <RecommendedItemImage src={props.img || "https://developer.mozilla.org/assets/mdn_contributor.png"} />
        <RecommendedItemPrice children={props.price || "15.2"} />
        <RecommendedItemName children={props.name || "Jeans shorts for men blue color"} />
    </RecommendedItem>
}