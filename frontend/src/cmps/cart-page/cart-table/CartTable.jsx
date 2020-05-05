import React from 'react'
import CartTableList from './CartTableList.jsx';

export default function CartTable({ bag, deleteItem, changeQuantity }) {

    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th colSpan="2">מוצר</th>
                    <th>כמות</th>
                    <th>מחיר ליחידה</th>
                    <th>סה"כ</th>
                </tr>
            </thead>
            <CartTableList bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity} />
        </table>
    )
}
