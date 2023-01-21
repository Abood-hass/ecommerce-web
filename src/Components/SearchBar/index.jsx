import React from 'react'
import { NavIcon, NavIconsGroup, SearchBarButton, SearchBarContainer, SearchBarInput, SearchBarSelect } from './style'

export default function index() {
    return (
        <SearchBarContainer>
            <SearchBarInput />
            <SearchBarSelect />
            <SearchBarButton />
        </SearchBarContainer>
    )
}
