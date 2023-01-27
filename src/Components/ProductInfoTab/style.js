import styled from "styled-components";

export const NavBar = styled.div`
    height:30px;
    padding: 0px 10px;
    box-sizing:border-box;
    width:100%;
    border: 1px solid #E3E8EE; 
    border-width:0px 0px 1px 0px;
    &>*{
        border: 1px solid #0000; 
        margin:auto 10px;
        font-size: 16px;
        font-weight: 400;
        padding-bottom: 8px;
        color: #8B96A5; 
        border-width:0px 0px 1px 0px;
        cursor:pointer;
    }
`