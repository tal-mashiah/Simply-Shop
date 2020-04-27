import React from 'react'
import CartItemPreview from './CartItemPreview.jsx'

export default function CartItemList({ bag, deleteItem, changeQuantity }) {
    return (
        <div className="cart-item-list">
            {bag.map((item, idx) => {
                return <CartItemPreview item={item} key={idx} deleteItem={deleteItem} changeQuantity={changeQuantity}/>
            })}
        </div>
    )
}
