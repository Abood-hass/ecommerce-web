import React from 'react'
import { OfferCard } from './style'

export default function Index(props) {
    return (
        <OfferCard src={props.img} productName={props.productName} offer={props.offer} />
    )
}
