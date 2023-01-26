import React from 'react'
import { UsedFilter, UsedFilterItemContainer } from './style'

export default function index(props) {
    return (
        <UsedFilter>
            {props.filters.map(filter => <UsedFilterItemContainer children={filter.title} onClick={() => props.delete(filter.title)} />)}
        </UsedFilter>
    )
}
