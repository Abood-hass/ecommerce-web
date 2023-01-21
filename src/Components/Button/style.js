import styled from "styled-components";
import { LightBlue } from "../ColorSchema";

export const ButtonContainer = styled.button`
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