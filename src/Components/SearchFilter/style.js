import { useState } from "react";
import styled from "styled-components";
import CheckBox from '../CheckBox'
import { LightBlue } from "../ColorSchema";

export const SearchFilterContainer = styled.div`
    user-select:none;
    padding: 10px 5px;
    display:flex;
    flex-direction:column;
    border: 1px solid #e3e8ee;
    border-width: 1px 0px 0px 0px;

`


export const SearchFilterHeader = styled.div`
    &>span {
        font-weight: 600;
        font-size: 16px;
    }
    &>span:nth-of-type(2){
        cursor:pointer;
        color:#8B96A5;
        transform:rotate(90deg)
    }
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    box-sizing:border-box;
`

export const SearchFilterBody = styled.div`
    transition: all 200ms;
    margin: 15px 0px;
    display:flex;
    overflow: hidden;
    flex-direction:column;
    align-items: left;
    justify-content: space-evenly;
    gap:10px;
    
    &>span{
        &:hover{
            font-weight: 600;
            color: #fff;
            background:${LightBlue};
        }
        padding: 5px;
        border-radius: 6px;
        transition: all 200ms;
        color: #505050;
    }
`


export const RangeSliderBody = styled.div`
    position: relative;
     width: 90%; 
    font-weight: 400;
    font-size: 16px;
    &>div{
        width: 100%; 
        display:grid;
        grid-template-columns:50% 50%;
        margin:10px auto;
        gap:10px;
        &>input{ 
        width: 90%; 
            height: 40px; 
            border-radius: 6px;
            border: 1px solid #E3E8EE; 
            font-size: 16px;
        }
    }
    &>button{
        width: 100%; 
        margin: auto;
        border:none;
        color:${LightBlue};
        font-size: 16px;
        padding: 10px 0px;
        background: #fff;
    }

`

export const RadiusSelectBody = styled.div`
        gap:10px;

display:flex;
flex-direction:column;
    margin:10px 0px;
align-items:left;
    &>div{
        display:flex;
        gap:10px;
    &>input{
        font-size:20px;
    }
    &>span{
        font-size:20px;
        }
    }
    
`

export const RangeSlider = styled.input.attrs(_ => ({ type: "range" }))` 

    width: 100% ; 
    margin:auto;
    &::-webkit-slider-runnable-track {
        width: 100%;
        z-index:9;

    }
    &::-webkit-slider-thumb {
        position: relative;
        appearance: none; 
        border-radius: 100%;
        border: 0;
        top: 50%; 
        transition: background-color 150ms;
    }
     &::-moz-range-thumb { 
    }
`
export const SearchFilterSeeAllBtn = styled.span.attrs(_ => ({ children: "See all" }))`
    color:#0D6EFD;
`


export const SearchFilterHeaderContainer = (props) => {

    return <SearchFilterContainer>
        <SearchFilterHeader>
            <span>{props.header}</span>
            <span onClick={props.show} style={{ transform: props.showed ? 'rotate(-90deg)' : 'rotate(90deg)' }}>&#10096;</span>
        </SearchFilterHeader>
        <SearchFilterBody style={{ height: props.showed ? 'fit-content' : '0px' }}>
            {
                (props.multiChoose) ?
                    props.options.map((option, index) => <CheckBox key={index} value={option.value} label={option.title} onClick={_ => props.selectFun(option.title)} />)
                    : props.options.map((option, index) => { return <span key={index}>{option}</span> })
            }
        </SearchFilterBody>
        <SearchFilterSeeAllBtn onClick={props.show} />
    </SearchFilterContainer>
}


export const RangeSliderHeaderContainer = (props) => {
    const [sliderValue, setValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [minValue, setMinValue] = useState(0);

    return <SearchFilterContainer>
        <SearchFilterHeader>
            <span>{props.header}</span>
            <span onClick={props.show} style={{ transform: props.showed ? 'rotate(-90deg)' : 'rotate(90deg)' }}>&#10096;</span>
        </SearchFilterHeader>
        <RangeSliderBody>
            <RangeSlider min={minValue} max={maxValue} value={sliderValue} onChange={(e) => setValue(e.target.value)} />
            <div>
                <span>Min</span>
                <span>Max</span>
            </div>
            <div>
                <input placeholder="0" type={"number"} value={minValue} onChange={e => setMinValue(e.target.value)} />
                <input placeholder="1000" type={"number"} value={maxValue} onChange={e => setMaxValue(e.target.value)} />
            </div>
            <button children={"Apply"} />
        </RangeSliderBody>
        <SearchFilterSeeAllBtn onClick={props.show} />
    </SearchFilterContainer>
}



export const RadiusHeaderContainer = (props) => {
    return <SearchFilterContainer>
        <SearchFilterHeader>
            <span>{props.header}</span>
            <span onClick={props.show} style={{ transform: props.showed ? 'rotate(-90deg)' : 'rotate(90deg)' }}>&#10096;</span>
        </SearchFilterHeader>
        <RadiusSelectBody>
            <div><input type={"radio"} name={"1"} /><label>Any</label></div>
            {props.options.map(choose => <div><input type={"radio"} name={"1"} value={choose} /><label>{choose}</label></div>)}
        </RadiusSelectBody>
        <SearchFilterSeeAllBtn onClick={props.show} />
    </SearchFilterContainer>
}