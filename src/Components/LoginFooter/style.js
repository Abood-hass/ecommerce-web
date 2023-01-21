import styled from "styled-components";

export const FooterContainer = styled.div`
    display: grid; 
    gap: 300px;
    grid-template-columns: 0.8fr 1fr;
    box-sizing: border-box;
    background: #FFFFFF;
    width: 100vw;
    height: 60px;
    position: fixed;
    justify-content: space-evenly;
    bottom: 0px
`

export const PaymentWaysLogos = styled.div`
    gap: 30px;
    height: fit-content;
    width: fit-content;
    display: flex;
    box-sizing: border-box; 
    margin: auto;
`

export const OpstionFootLogin = styled.div`
    display: flex;
    gap: 20px;
    height: fit-content;
    width: fit-content;
    box-sizing: border-box; 
    margin: auto;
    color: #0005; 
    font-size: 16px;
    font-weight: 600;
`