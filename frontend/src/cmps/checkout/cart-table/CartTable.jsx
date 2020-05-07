import React from 'react'
import CartTableList from './CartTableList.jsx';

export default function CartTable({ bag, deleteItem, changeQuantity }) {

    return (
        <div className="cart-table">
            <h1>העגלה שלך</h1>
            <CartTableList bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity} />
        </div>
    )
}
