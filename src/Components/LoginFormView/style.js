import styled from "styled-components";
import { LightBlue } from "../ColorSchema";

export const LoginFormContainer = styled.form` 
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    justify-content: space-around;
    border-radius: 6px;
    width: 300px;
    min-height: 430px; 
    box-sizing: border-box;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.3); 
    margin-top: -10px; 
    gap: 15px;
     @media (max-width: 360px ) and ( max-height: 650px) {
        height: 100%; 
        width: 100%;
        margin-top: 0px;
    }
`
export const ErrorMsg = styled.div`
    background:red;
    color:white;
    text-align:center;
    border-radius: 10px;
    padding: 5px 0; 
`

export const LoginFormHeader = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 20px;
    text-align: left;
`


export const AnotherLoginButtons = styled.div` 
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    gap: 7px;
`
export const RegisterOption = styled.div`
    font-size: 12px;
    width: 100%;
    height: fit-content;
    font-weight:500;
    color: #9c9c9c;
`

export const RegisterOptionButton = styled.span`
    &:before {
        content: " ";
    }
    cursor: pointer;
    color: ${LightBlue};
`

export const TwoInputsContainer = styled.div`
    boz-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    gap: 10px;
`