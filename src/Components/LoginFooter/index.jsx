import React from 'react'
import { FooterContainer, OpstionFootLogin, PaymentWaysLogos } from './style'
import PaymentLogo from '../PaymentLogo'

// Images For payment ways
import AmericanExpressIcon from '../../Assest/Images/AmericanExpressIcon.png'
import MastercardIcon from '../../Assest/Images/Mastercard-Logo.wine.svg'
import PayPalIcon from '../../Assest/Images/PayPalIcon.png'
import VisaIcon from '../../Assest/Images/visa-logo.png'
//////////////////////////////////////////////////////////// 

export default function index() {


    const PaymentWayLogos = [
        AmericanExpressIcon,
        MastercardIcon,
        PayPalIcon,
        VisaIcon
    ]

    const FooterOptions = [
        "Support",
        "Privacy & Cookies",
        "Accessibility"
    ]


    return (
        <FooterContainer>
            <PaymentWaysLogos>
                {PaymentWayLogos.map((item, index) => <PaymentLogo key={index} src={item} />)}
            </PaymentWaysLogos>

            <OpstionFootLogin>
                {FooterOptions.map((item, index) => <span style={{ cursor: 'pointer' }} key={index}>{item}</span>)}
            </OpstionFootLogin>
        </FooterContainer>
    )
}
