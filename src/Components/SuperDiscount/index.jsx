import React from 'react'
import { SuperDiscountContainer, SuperDiscountTextContainer, SuperDiscountTrapezoid } from './style'
import Button from '../Button'

export default function index() {
    return (
        <SuperDiscountContainer>
            <SuperDiscountTrapezoid>
                <SuperDiscountTextContainer>
                    <div>
                        <p>Super discount on more than 100 USD</p>
                        <p>Have you ever finally just write dummy info</p>
                    </div>
                    <Button style={{ width: "120px", background: "#FF9017", border: 'none', fontSize: '16px' }} label="Shop now" />
                </SuperDiscountTextContainer>
            </SuperDiscountTrapezoid>
        </SuperDiscountContainer>
    )
}
