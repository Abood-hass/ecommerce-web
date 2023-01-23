import React from 'react'
import { LogoContainer, LogoImgContainer, LogoName } from './style'

export default function Index(props) {
    return (
        <LogoContainer style={props.style}><LogoImgContainer style={props.logoStyle} /><LogoName children={"Brand"} style={props.nameStyle} /></LogoContainer>
    )
}
