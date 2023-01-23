import styled from "styled-components";

export const HeaderContainer = styled.div`
    display:grid;
    grid-template-columns: 10% 70% 20%;
    align-items:center;
    height: 75px;
    box-sizing: border-box;
    padding: 0px 90px;
    justify-content: space-evenly;
    width:98vw;
    margin:auto;
    overflow:hidden;
`
export const NavIconsGroup = styled.div`
    display: flex;
    height: 35px;
    width: fit-content;
    margin:auto;
    gap: 15px;
`

export const NavIcon = styled.div`
    cursor: pointer;
    display: flex;
    align-items:center;
    flex-direction: column;
    color: #8B96A5;
    height: 35px;
    gap: 4px; 
`
export const NavImage = styled.img`
    height: 20px;
    width: 20px;
    object-fit: contain;
`
export const NavText = styled.span`
    font-size: 11px;
    text-align:center;
    width:50px;
`


export const HeaderSecondContainer = styled.div`
    display:flex; 
    border: 1px solid #8B96A565;
    align-items:center;
    height: 40px;
    box-sizing: border-box; 
    justify-content: space-evenly;
    width:98vw;
    margin:auto;
    gap:30vw;
`

export const HeaderSecondGroup = styled.div`
    display:flex;
    justify-content: space-between;
    text-align:center;
    width: fit-content;
    gap: 20px;
    margin:auto; 
`

export const SecondHeaderItemImg = styled.img`
    height: 15px;
    object-fit: contain;
`
export const SecondHeaderItem = styled.div`
    cursor:pointer;
    display: flex;
    gap: 10px;
    align-items:center;
    width: fit-content;
    height: 90%;
    font-size: 13px;
`

export const SelectHeaderMenu = styled.select`
    background: #0000;
    border:none;
    font-size: 13px;
`


export const OptionHeaderMenu = styled.option` 
    font-size: 12px;
`
