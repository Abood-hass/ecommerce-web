import React, { useContext, useEffect, useState } from 'react'
import { CartViewContainer, CartViewItemList, CouponInput, PriceData, PriceDataDiscount, PriceDataTax } from './style'
import CartListItem from '../CartListItem'
import OrLine from '../OrLine'
import Buttom from '../Button'

import img5 from '../../Assest/Images/RecommendedItems/Image5.png';
import img6 from '../../Assest/Images/RecommendedItems/Image6.png';
import emptyCart from '../../Assest/Images/empty-cart.png';
import { useNavigate } from 'react-router-dom'
import { CartCont, } from '../../ContextApi/CartContext'

export default function Index() {
    const navigation = useNavigate()

    const { cart } = useContext(CartCont)




    const [totalItemPrices, setTotalItemPrices] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [tax, setTax] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalItemPrices(cart.map(item => (item.price * item.qty)).reduce((a, b) => a + b, 0))
        setTax(cart.length * 10)
    }, [cart])


    useEffect(() => {
        setTotalPrice(totalItemPrices - discount + tax)
    }, [totalItemPrices, discount, tax])

    return (
        <CartViewContainer>
            <div>
                <CartViewItemList>
                    {
                        cart.length ?
                            cart.map((item, index) => <CartListItem {...item} index={index} />)
                            :
                            <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                                <img src={emptyCart} style={{ width: "50%", margin: "auto" }} alt="" />
                                <Buttom style={{ width: "30%", }} label="Back to Home Page" onClick={_ => navigation("/explore")} />
                            </div>
                    }
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
                                <span>{"$" + totalPrice}</span>
                            </PriceData>
                            <br />
                            <Buttom style={{ background: "#00B517", color: "#fff", height: "50px", fontSize: "16px" }} label={"Checkout"} onClick={_ => console.log(cart)} />
                        </div>
                    </CartViewItemList>
                </div>
            </div>
        </CartViewContainer>

    )
}
