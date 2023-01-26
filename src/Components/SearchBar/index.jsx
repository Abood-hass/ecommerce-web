import React from 'react'
import { SearchBarButton, SearchBarContainer, SearchBarInput, SearchBarSelect } from './style'

export default function index() {
    return (
        <SearchBarContainer>
            <SearchBarInput />
            <SearchBarSelect />
            <SearchBarButton />
        </SearchBarContainer>
    )
}
