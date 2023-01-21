import React from 'react'
import { OrLineContainer, OrLineHr } from './style'

export default function index(props) {
    return (
        <OrLineContainer>
            {
                (props.label) ?
                    <><OrLineHr />{props.label}< OrLineHr /></>
                    : <OrLineHr style={{ width: '100%' }} />
            }

        </OrLineContainer>
    )
}

