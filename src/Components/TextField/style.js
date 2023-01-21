import styled from "styled-components";


export const TextFieldContainer = styled.div` 
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const TextFieldLabelContainer = styled.div`
    font-size: 14px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const TextFieldLabel = styled.span` 
    width: fit-content;
    text-align: left; 
`
export const TextFieldForgetPWText = styled.span`
    cursor: pointer;
    font-size: 12px;
    color:#0D6EFD; 
    text-align: right;
    width: fit-content;
`

export const TextFieldShowPWIcon = styled.img`
    position: absolute;
    width: 20px;
    object-fit: contain;
    top: 54%;
    right: 5%;
    cursor: pointer;

`
export const TextFieldInput = styled.input`
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    padding: 0px 5px;
    height: 25px;
   &:focus {
        outline: none;
        box-shadow: 0px 0px 2px gray;
    }
`
export const TelephonFieldContainer = styled.div`
display:flex;
align-items: center; 
`

export const SelectList = styled.select`
min-width: 33%;
height: 26px;
outline:none;
border: 1px solid #E0E0E0;
border-width: 1px 0px 1px 1px;
border-radius: 6px 0px 0px 6px;

`