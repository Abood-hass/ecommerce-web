import styled from "styled-components";

export const SearchResultsBody = styled.div`
    display: grid;
    grid-template-columns: 20% 70%;
    gap: 50px; 
    width: 85%;
`
export const SearchResultsHeader = styled.div`
    box-sizing:border-box;
    display:flex;
    background:#fff;
    justify-content:space-between;
    padding: 15px 10px 15px 20px;
    width:100%;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
`
export const SearchResultsItemsList = styled.div`
    margin: 10px 0px;
    width:100%;
    box-sizing:border-box;
    display:flex;
    flex-direction:column; 
    justify-content:space-around; 
`

export const SearchResultsItemsGrid = styled.div`
    margin: 10px auto;
    width:100%;
    box-sizing:border-box;
    display:grid;
    grid-template-columns: auto auto auto; 
    gap:20px;
    justify-items: center;
`