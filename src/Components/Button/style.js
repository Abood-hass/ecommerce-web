import styled, { keyframes } from "styled-components";
import { LightBlue } from "../ColorSchema";
import indicatorImage from '../../Assest/Images/loading-sign-30.png'

export const ButtonContainer = styled.button`
&:disabled{
    cursor: not-allowed; 
    background: ${LightBlue + "90"};
}
&:hover{
    background: ${LightBlue + "90"};
}
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content:space-evenly;
    position: relative;
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 6px;
    color:#fff;
    background: ${LightBlue};
    border: 1px solid #E0E0E0;
`
export const ButtonIcon = styled.img`
    position: absolute;
    top: 10%;
    left: 5%;
    width: 25px;
    object-fit: contain;
`
const rotateAnimation = keyframes`
    0%{transform: rotate(90deg);}
    100%{transform: rotate(360deg);}
`
export const LoadingIndicator = styled.img.attrs(_ => ({
    src: indicatorImage,
}))`
    position: absolute;
    left: 10%;
    height: 25px;
    animation: ${rotateAnimation} 200ms infinite;
    animation-timing-function: ease-in-out;
    `