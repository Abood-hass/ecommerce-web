import { useState } from "react";
import styled from "styled-components";
import { LightBlue } from "../ColorSchema";
import Avatar from '../../Assest/Images/icon-account-50.png'

export const MainAdsViewContainer = styled.div`
    display:flex;
    height: 400px;
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
    width: 30%;
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
    margin:auto;
    width: 80%;
    object-fit: cover;
    
`
export const MainAdsViewItemViewedImage = styled.img`
    background:gray;
    transition: all 300ms;
    max-height: 384px;
    width: 800px;
    object-fit: cover;
    margin: auto;
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
    padding: 0px 10px;
    display: flex;
    flex-direction:column;
    justify-content:space-between; 
    max-height: 400px;
    width: 30%; 
`

export const DiscountsViewItem = styled.div`
    padding:  10px 100px 30px 30px;
    color:  white; 
    box-sizing: border-box;
    height: 110px;
    width: 100%;
    font-size:18px;
    border-radius: 6px;
    text-align:left;
    gap:10px;
    font-weight: 300;
    &:nth-of-type(1){
        padding: 10px 30px;
        font-weight: 400;
        background:#E3F0FF;
    } 
    &:nth-of-type(2){
        background:#55BDC3;
    } 
    &:nth-of-type(3){
        background: #F38332;
    } 
`

const StartupImg = styled.img`
    height: 44px;
    width: 44px;
    border-radius: 50%;
`

const StartupBtn = styled.button`
    margin: 5px 0px;
    height: 30px;
    border-radius:6px;
    width: 100%;
    border: none;
    background:#0D6EFD;
    color:#fff;
    &:nth-of-type(2){
        color:#0D6EFD;
        background:#fff;
    } 
`

export const Startup = (props) => {
    return <DiscountsViewItem {...props} style={{ height: '150px' }} >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '5px 0px' }}>
            <StartupImg src={Avatar} />
            <span style={{ color: 'black', fontSize: '15px' }}>Hi, user<br />let’s get stated</span>
        </div>
        <StartupBtn children={"Join now"} />
        <StartupBtn children={"Log in"} />
    </DiscountsViewItem>
}
