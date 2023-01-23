
import React from 'react'
import { ButtonContainer, ButtonIcon, LoadingIndicator } from './style'
import googleIcon from '../../Assest/Images/google-icon-48.png'
import facebookIcon from '../../Assest/Images/facebook-icon-48.png'


export default function Index(props) {
    return (

        <ButtonContainer
            disabled={props.loading}
            style={{ background: props.BG, color: props.labelColor, ...(props.style) }}
            onClick={props.onClick}>

            {props.loading && <LoadingIndicator />}
            {props.LoginWay &&
                <ButtonIcon

                    src={(props.LoginWay) === "google" ? googleIcon : facebookIcon} />}
            {props.label || "Log In"}
        </ButtonContainer>
    )
}


