import styled from "styled-components";
import { LightBlue } from "../ColorSchema";

export const UsedFilter = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:10px;
    align-items:center;
    padding:10px 20px;
     
`
export const UsedFilterItem = styled.div`
    display:flex;
    align-items:center;
    padding:0px 10px;
    border: 1px solid ${LightBlue};
    border-radius: 5px;
    justify-content:space-evenly;
    color:${LightBlue};
    gap:10px;
    &>span{
        cursor:pointer;
        color:red;
    }
`
export const UsedFilterItemContainer = (props) => {
    return <><UsedFilterItem >{props.children} <span onClick={props.onClick}>X</span></UsedFilterItem></>
}