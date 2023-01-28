import React, { useEffect, useState } from 'react'
import { CartViewContainer, CartViewItemList, CouponInput, PriceData, PriceDataDiscount, PriceDataTax } from './style'
import CartListItem from '../CartListItem'
import OrLine from '../OrLine'
import Buttom from '../Button'

import img5 from '../../Assest/Images/RecommendedItems/Image5.png';
import img6 from '../../Assest/Images/RecommendedItems/Image6.png';

export default function Index() {
    const [cart, setCart] = useState([
        {
            img: img5,
            name: "Bag",
            detail: [{ label: "Size", value: "medium", }, { label: "color", value: "blue", },],
            price: 120,
            countOfStack: 200,
            qty: 0
        },
        {
            img: img6,
            name: "Skhan",
            detail: [{ label: "Size", value: "medium", }, { label: "color", value: "black", },],
            price: 220,
            countOfStack: 10,
            qty: 0
        },
    ])


    const changeQuantity = (id) => {
        setCart(prev => prev.map((item, index) => (index === id) ? ({ ...item, qty: ++(item.qty) }) : item))
    }



    const [totalItemPrices, setTotalItemPrices] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [tax, setTax] = useState(0)

    useEffect(() => {
        setTotalItemPrices(cart.map(item => (item.price * item.qty)).reduce((a, b) => a + b, 0))
    }, [cart])


    return (
        <CartViewContainer>
            <div>
                <CartViewItemList>
                    {cart.map((item, index) => <CartListItem {...item} index={index} changeQuantity={changeQuantity} />)}
                </CartViewItemList>
                <div>
                    <CartViewItemList>
                        <span style={{ color: '#505050' }}>Have a coupon?</span>
                        <CouponInput>
                            <input placeholder='Enter Coupon Here' />
                            <button children={"Apply"} />
                        </CouponInput>
                    </CartViewItemList>
                    <br />
                    <CartViewItemList>
                        <div>
                            <PriceData>
                                <span>Subtotal</span>
                                <span>{"$" + totalItemPrices}</span>
                            </PriceData>

                            <PriceData>
                                <span>Discount</span>
                                <PriceDataTax><span>{discount}</span></PriceDataTax>
                            </PriceData>

                            <PriceData>
                                <span>Tax</span>
                                <PriceDataDiscount><span>{tax}</span></PriceDataDiscount>
                            </PriceData>
                            <OrLine />
                            <PriceData style={{ fontWeight: "700", color: "black" }}>
                                <span>Total</span>
                                <span>1403.97</span>
                            </PriceData>
                            <br />
                            <Buttom style={{ background: "#00B517", color: "#fff", height: "50px", fontSize: "16px" }} label={"Checkout"} />
                        </div>
                    </CartViewItemList>
                </div>
            </div>
        </CartViewContainer>

    )
}
