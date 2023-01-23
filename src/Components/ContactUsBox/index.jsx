import React from 'react'
import { ContactUsBox, ContactUsContainer, ContactUsContainerFilter, ContactUsText } from './style'

export default function index() {
    return (
        <ContactUsContainer >
            <ContactUsContainerFilter>
                <ContactUsText children="An easy way to send requests to all suppliers" />
                <ContactUsText
                    style={{ fontSize: '18px', fontWeight: '300', height: '100px', width: '550px' }}
                    children="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt." />
            </ContactUsContainerFilter>
            <ContactUsBox />
        </ContactUsContainer>
    )
}
