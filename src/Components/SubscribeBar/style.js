import styled from "styled-components";

export const SubscribeContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:#EFF2F4;
    width:100%;
    height:190px;
`

export const SubscribeBtnContainer = styled.div`
    &>img{
        position:absolute;
        height:30px;
        width:30px;
        left:3%;
        bottom:10%;
    }
    position:relative;
    flex-grow: 0.2; 
    display:flex; 
    align-items:flex-end; 
    gap:15px;
`
export const SubscribeHeaderContainer = styled.span` 
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`
export const SubscribeBodyContainer = styled.span` 
    font-size: 14px;
    font-weight: 300;
    text-align: center;
`

export const SubscribeInput = styled.input.attrs(_ => ({ placeholder: "Email", type: "email" }))`
    font-size: 16px;
    padding:0px 50px;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    background: #FFFFFF;
    height: 40px;
    width: 220px;
`