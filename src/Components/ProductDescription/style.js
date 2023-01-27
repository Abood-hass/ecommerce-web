import styled from "styled-components"

export const ProductDescriptionContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
`

export const Details = styled.div`
    font-size: 16px; 
    color: #505050;
    width: 100%;
`


export const InfoTable = styled.table`
    font-weight: 400;
    font-size: 16px;
    color: #505050;
    width: 60%;
    border-collapse: collapse; 
    border: 1px solid #E0E7E9;
    &>tr>td{
        padding:10px;
        border: 1px solid #E0E7E9;
    }
    &>tr>td:nth-child(1) {   
        width: 40%;
        background: #EFF2F4;
        padding:10px;
    }
`

export const Features = styled.div`
    color: #505050;
    font-weight: 400; 
    font-size: 16px;
    &>img{
        width:15px;
        margin-right:10px; 
        object-fit:contain;
    }
`
