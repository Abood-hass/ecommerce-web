import React, { createContext, useState } from "react";

export const CartCont = createContext()
export default function CartContext(props) {

    const [cart, setCart] = useState([]);

    const addToCart = (newProduct) => {
        setCart(prev => prev.every(oldProduct => oldProduct.id !== newProduct.id) ? [...prev, { ...newProduct, qty: 1 }] : prev)
    }

    const changeQuantity = (productId, qty) => {
        qty = parseInt(qty)
        setCart(prev => prev.map(oldProduct => (oldProduct.id === productId) ? { ...oldProduct, qty } : oldProduct));
    }

    const deleteItem = (productId) => {
        setCart(prev => prev.filter(oldProduct => (oldProduct.id !== productId)));
    }

    return (
        <CartCont.Provider value={{ cart, addToCart, changeQuantity, deleteItem }}>
            {props.children}
        </CartCont.Provider>
    )
}



