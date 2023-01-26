import React from 'react'
import { PathContainer } from './style'

export default function Index(props) {
    const ProductPath = ["Home", "Clothings", "Men’s wear", "Summer clothing"] || props.path
    return (
        <PathContainer>
            <span>{ProductPath.join(" > ")}</span>
        </PathContainer>
    )
}
