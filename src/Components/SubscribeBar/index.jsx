import React from 'react'
import { SubscribeBodyContainer, SubscribeBtnContainer, SubscribeContainer, SubscribeHeaderContainer, SubscribeInput } from './style'
import EmailIcon from '../../Assest/Images/email-icon.png'
import Button from '../Button'

export default function index() {
    return (
        <SubscribeContainer>
            <SubscribeHeaderContainer children={"Subscribe on our newsletter"} />
            <SubscribeBodyContainer children={"Get daily news on upcoming offers from many suppliers all over the world"} />
            <SubscribeBtnContainer>
                <img src={EmailIcon} alt="" />
                <SubscribeInput />
                <Button style={{ height: '40px', fontSize: "16px" }} label={"Subscribe"} />
            </SubscribeBtnContainer>
        </SubscribeContainer>
    )
}
