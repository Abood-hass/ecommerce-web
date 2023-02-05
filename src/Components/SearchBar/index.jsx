import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBarButton, SearchBarContainer, SearchBarInput, SearchBarSelect } from './style'

export default function Index() {
    const navigation = useNavigate()

    return (
        <SearchBarContainer>
            <SearchBarInput />
            <SearchBarSelect />
            <SearchBarButton onClick={() => navigation('/explore/search')} />
        </SearchBarContainer>
    )
}
