import React from 'react'
import { CartViewItemContainer, CartViewItemInfo, CartViewPriceAndQty } from './style'
import Button from '../Button'
import { LightBlue } from '../ColorSchema'

export default function index(props) {
    const buttonsStyle = { background: "#fff", width: "70px", height: "30px", marginTop: "20px", color: "red" }

    return (
        <CartViewItemContainer>
            <img src={props.img} />
            <CartViewItemInfo>
                <span>{props.name}</span>
                <span>{props.detail.map(i => i.label + ": " + i.value) + " "}</span>
                <div style={{ display: "flex", gap: "10px" }}>
                    <Button style={{ ...buttonsStyle }} label={"Remove"} />
                    <Button style={{ ...buttonsStyle, width: "100px", color: LightBlue }} label={"Save for later"} />
                </div>
            </CartViewItemInfo>
            <CartViewPriceAndQty>
                <span>{props.price}</span>
                <div>
                    <span>Qty: </span>
                    <select onChange={() => props.changeQuantity(props.index)}>
                        <option selected disabled value="">--</option>
                        {[...new Array(props.countOfStack)].map((_, index) => {
                            index += 1
                            return <option value={index}>{index}</option>
                        })}
                    </select>
                </div>
            </CartViewPriceAndQty>
        </CartViewItemContainer>
    )
}
