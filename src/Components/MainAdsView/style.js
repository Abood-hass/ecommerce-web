import { useState } from "react";
import styled from "styled-components";
import { LightBlue } from "../ColorSchema";

export const MainAdsViewContainer = styled.div`
display:flex;
    min-height: 55vh;
    width:100%;
    background: #fff;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 8px;
`


export const MainAdsViewList = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 20%;
    gap: 5px;
    background: #fff;
`

export const MainAdsViewListItem = styled.div`
&:hover{
    background:#E5F1FF;
    font-weight: 500;
}
    cursor:pointer;
    display:flex;
    algin-items:center;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0px 20px;
    height: 30px;
    width: 95%;
    border-radius: 8px;
`


export const MainAdsViewListItemText = styled.span` 
    width: 100%; 
    font-size: 16px;
    margin:auto;
    text-align: left;
`

export const MainAdsViewItemViewedContainer = styled.div`
    position:relative;
    max-height: 410px;
    width: 800px;
    object-fit: cover;
    
`
export const MainAdsViewItemViewedImage = styled.img`
&:hover{
    transform:scale(1.1);
}   
overflow:hidden;
    transition: all 300ms;
    height: 410px;
    width: 800px;
    object-fit: cover;
    
`
const MainAdsViewItemViewedText1 = styled.span`
    font-size: 28px;
    font-weight: 400;
    text-align: left; 
`

const MainAdsViewItemViewedText2 = styled.span`
    font-size: 28px;
    font-weight: 600;
    text-align: left; 
`

const MainAdsViewItemViewedButton = styled.button.attrs(() => ({ children: "Learn more" }))`
&:hover{
    background: ${LightBlue}90;
    color: #fff;
}
    transition: all 200ms;
    height: 40px;
    width: 110px; 
    border: none;
    background: #FFFFFF;
    border-radius: 6px;
    font-size: 15px;
    margin-top: 10px;
`
const MainAdsViewItemViewedTexts = styled.div`
    position:absolute;
    flex-direction: column;
    left: 6%;
    top: 10%;
    display:flex;
    align-items:left;
    justify-content: space-between;
    gap:3px;
    color:${LightBlue};
`
const MainAdsViewItemViewedTextsDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6px;
    border-radius: 6px;

`

export const MainAdsViewItemViewedBox = (props) => {
    const [blur, setBlur] = useState(false)
    return <MainAdsViewItemViewedTexts >
        <MainAdsViewItemViewedTextsDiv style={blur ? { background: "#fff6" } : {}}>
            <MainAdsViewItemViewedText2 children={props.text2} style={blur ? { color: "black" } : {}} />
            <MainAdsViewItemViewedText1 children={props.text1} style={blur ? { color: "black" } : {}} />
        </MainAdsViewItemViewedTextsDiv>
        <MainAdsViewItemViewedButton onClick={props.onClick} onMouseEnter={() => setBlur(true)} onMouseLeave={() => setBlur(false)} />
    </MainAdsViewItemViewedTexts>
}

export const DiscountsViewGroup = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    background: black;
    max-height: 410px;
    width: 30%;
`

export const DiscountsViewItem = styled.div`

`
