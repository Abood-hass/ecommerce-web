import styled from "styled-components";
import { LightBlue } from "../ColorSchema";

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 0px 2px;
    width: 40vw;
    height: 35px;
    border: 3px solid ${LightBlue};
    border-radius: 6px;
    margin:auto;
`


export const SearchBarInput = styled.input.attrs(_ => ({
    type: "text",
    placeholder: "Search"
}))`
    outline: none;
    width: 100%;
    height: 90%;
    border: none;
`

export const SearchBarSelect = styled.select`
    outline: none;
    min-width: 150px;
    height: 100%;
    border: none;
    border: 3px solid ${LightBlue};
    border-width: 0px 1px ;
`

export const SearchBarButton = styled.button.attrs(_ => ({ children: "Search" }))`
    border: none;
    outline:none;
    width: 80px;
    background: ${LightBlue};
    height: 100%;
    color: white;
`
