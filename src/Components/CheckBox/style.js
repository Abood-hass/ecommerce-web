import styled from "styled-components";
import { LightBlue } from "../ColorSchema";


export const CheckBoxContainer = styled.div`
    user-select: none;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
`


export const CheckBoxLabel = styled.span`
    align-text: left;
    font-size: 14px;
`
export const CheckBoxLink = styled.span`

    cursor: pointer;
    color: ${LightBlue};
    &:hover{
        text-decoration: underline;
        text-decoration-color:${LightBlue} ;
    }
`

export const CheckBoxInput = styled.div` 
    height: 14px;  
    width: 14px;
    border:2px solid ${LightBlue};
    border-radius: 5px; 
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center; 
`