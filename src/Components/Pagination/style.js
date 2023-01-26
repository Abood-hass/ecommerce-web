import styled from "styled-components";

export const PaginationContainer = styled.div` 
    display:flex;
    justify-content: flex-end;
    align-items: center;
    height:150px;
 
`
export const PaginationBtnsGroup = styled.div` 
    height: 40px;
    display:flex; 
    justify-content:flex-end; 
    gap:20px;
    &>div,select {
        border-radius: 6px;
        border: 1px solid #E3E8EE;
        background:#fff;
    }
`
export const PaginationNumberOfItems = styled.select`
    box-sizing:border-box;
    padding:0px 10px;
    height: 100%; 
`

export const PaginationBtn = styled.button`
    &:hover {
        background:#c9c9ca;
    }
    height: 100%;
    width: 40px;  
    background:#0000;
    border: none; 
    font-size:18px;
`