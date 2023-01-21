import React from 'react'
import { CheckBoxContainer, CheckBoxInput, CheckBoxLabel, CheckBoxLink } from './style'
import CheckedIcon from '../../Assest/Images/checked-checkbox-24.png'


export default function index(props) {
    const checkedStyle = { backgroundImage: `url(${CheckedIcon})`, }

    return (
        <CheckBoxContainer onClick={props.onClick}>
            <CheckBoxInput style={props.value ? checkedStyle : {}} />
            <CheckBoxLabel>
                {(props.label || "Remember me")}
                <CheckBoxLink>{(props.labelLink || "")}</CheckBoxLink>
            </CheckBoxLabel>
        </CheckBoxContainer>
    )
}
