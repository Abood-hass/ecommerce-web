import styled from "styled-components";

export const SearchResultsHeader = styled.div`
   
    box-sizing:border-box;
    display:flex;
    background:#fff;
    justify-content:space-between;
    padding: 5px 15px;
    width:100%;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    text-size: 16px;
     &>div{
        display:flex;
        justify-content:none;
        align-items:center;
        gap:10px;
    }
`
export const SearchResultsDropList = styled.select`
    height: 30px;
    width: 172px; 
    border-radius: 6px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #E3E8EE;
`

export const SearchResultsMenuSwitch = styled.div`
    &>img{
        box-sizing:border-box;
        height:25px;
        width:25px;
        margin:auto;
    }
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    height:30px;
    width: 70px;
    border: 1px solid #E3E8EE;
    border-radius:6px;
    background:linear-gradient(90deg, #fff 50%, #DADADA 50%);
`
