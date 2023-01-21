
import React from 'react'
import { ButtonContainer, ButtonIcon } from './style'
import googleIcon from '../../Assest/Images/google-icon-48.png'
import facebookIcon from '../../Assest/Images/facebook-icon-48.png'


export default function Index(props) {
    return (

        <ButtonContainer
            style={{ background: props.BG, color: props.labelColor }}
            onClick={props.onClick}>
            {props.LoginWay &&
                <ButtonIcon
                    src={(props.LoginWay) === "google" ? googleIcon : facebookIcon} />}
            {props.label || "Log In"}
        </ButtonContainer>
    )
}


