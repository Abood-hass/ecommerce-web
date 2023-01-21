import styled from "styled-components";

const myGray = "#A9ACB070"

export const OrLineContainer = styled.div`
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: ${myGray};
    font-size: 12px;
`

export const OrLineHr = styled.hr`
    background: ${myGray};
    border: none;
    height:1px;
    width: 40%; 
`