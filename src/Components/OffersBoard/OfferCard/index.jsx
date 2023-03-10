import React from 'react'
import { OfferCard } from './style'

export default function Index(props) {
    return (
        <OfferCard onClick={props.onClick} src={props.img} productName={props.productName} offer={props.offer} />
    )
}
