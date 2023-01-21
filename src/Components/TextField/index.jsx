import React, { useState } from 'react'
import ClosedEye from '../../Assest/Images/closed-eye-24.png'
import OpenedEye from '../../Assest/Images/open-eye-24.png'

import {
    SelectList,
    TelephonFieldContainer,
    TextFieldContainer,
    TextFieldForgetPWText,
    TextFieldInput,
    TextFieldLabel,
    TextFieldLabelContainer,
    TextFieldShowPWIcon
} from './style'


export default function Index(props) {

    const [eyeClosed, setEyeClosed] = useState(props.type === "password" || false)
    const [errorFlag, setErrorFlag] = useState(false)

    const Tels = [{ type: "WAT", num: "056" }, { type: "JWA", num: "059" }]


    const onShowPassword = () => {
        setEyeClosed(!eyeClosed)
    }
    const onChange = (event) => {
        props.onChange(event)
        setErrorFlag((props.minLength > event.target.value.length))
    }

    const inputTag = (<TextFieldInput
        minLength={props.minLength}
        maxLength={props.maxLength}
        value={props.value}
        onChange={onChange}
        placeholder={props.placeholder || "Enter Username"}
        type={props.type === "password" ? eyeClosed ? "password" : ("text") : props.type}
        style={{
            borderColor: errorFlag ? "red" : "",
            borderRadius: (props.type === "tel") ? "0px 6px 6px 0px" : "6px"
        }}
    />);


    return (
        <TextFieldContainer
            style={{
                width: (props.type === "tel") ? "100%" : "",
                ...(props.style)
            }}>

            <TextFieldLabelContainer >
                <TextFieldLabel >
                    {props.label || "Username"}
                </TextFieldLabel>

                {(props.type === "password") &&
                    <TextFieldForgetPWText >Forgot Password</TextFieldForgetPWText>}

            </TextFieldLabelContainer >
            {props.type === "tel" ?
                <TelephonFieldContainer >
                    <SelectList>
                        {Tels.map((val, ind) => <option value={val.num} key={ind}>{val.type + " " + val.num}</option>)}
                    </SelectList>
                    {inputTag}
                </TelephonFieldContainer > :
                inputTag}
            {
                (props.type === "password") &&
                <TextFieldShowPWIcon onClick={onShowPassword} src={eyeClosed ? OpenedEye : ClosedEye} />
            }
        </TextFieldContainer >
    )
}
