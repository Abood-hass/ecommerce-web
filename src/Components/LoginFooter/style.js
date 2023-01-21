import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex; 
    gap: 12vw;
    flex-wrap: wrap;
    padding: 5px 0px;
    box-sizing: border-box;
    background: #FFFFFF;
    width: 100vw;
    min-height: 60px;
    height: fit-content;
    position: fixed;
    justify-content: space-evenly;
    bottom: 0px;
    @media (max-width: 360px ),( max-height: 650px) {
        display: none;
    }
    
`

export const PaymentWaysLogos = styled.div`
    gap: 30px;
    height: fit-content;
    width: fit-content;
    display: flex;
    box-sizing: border-box; 
    margin: auto;
    @media (max-width: 700px)  {
        display: none;
    } 
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