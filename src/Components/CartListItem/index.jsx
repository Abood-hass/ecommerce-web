import React, { useContext } from 'react'
import { CartViewItemContainer, CartViewItemInfo, CartViewPriceAndQty } from './style'
import Button from '../Button'
import { LightBlue } from '../ColorSchema'
import { CartCont } from '../../ContextApi/CartContext'

export default function Index(props) {
    const buttonsStyle = { background: "#fff", width: "70px", height: "30px", marginTop: "20px", color: "red" }
    const { changeQuantity, deleteItem } = useContext(CartCont)


    return (
        <CartViewItemContainer>
            <img src={props.img} alt="" />
            <CartViewItemInfo>
                <span>{props.productName}</span>
                <span>{props.detail?.map(i => i.label + ": " + i.value) || " "}</span>
                <div style={{ display: "flex", gap: "10px" }}>
                    <Button style={{ ...buttonsStyle }} label={"Remove"} onClick={_ => deleteItem(props.id)} />
                    <Button style={{ ...buttonsStyle, width: "100px", color: LightBlue }} label={"Save for later"} />
                </div>
            </CartViewItemInfo>
            <CartViewPriceAndQty>
                <span>{props.price}</span>
                <div>
                    <span>Qty: </span>
                    <select onChange={(e) => changeQuantity(props.id, e.target.value)} value={props.qty}>
                        <option selected disabled value={0}>--</option>
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
