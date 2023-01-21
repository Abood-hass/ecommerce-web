import React from 'react'
import { LogoContainer, LogoImgContainer, LogoName } from './style'

export default function Index() {
    return (
        <LogoContainer><LogoImgContainer /><LogoName children={"Brand"} /></LogoContainer>
    )
}
