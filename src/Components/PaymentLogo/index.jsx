import React, { Component } from 'react'
import { PaymentContainer, PaymentSingleLogo } from './style'

export default class index extends Component {
    render() {
        return (
            <PaymentContainer>
                <PaymentSingleLogo src={this.props.src} />
            </PaymentContainer>
        )
    }
}
