import React from 'react'
import CartTablePreview from './CartTablePreview'

export default function CartTableList({ bag, deleteItem, changeQuantity }) {
    return (
        <div className="cart-table-list">
            {/* <div className="cart-table-header">
                <span className="product">מוצר</span>
                <span className="price">מחיר</span>
                <span className="quantity">כמות</span>
                <span className="total">סה"כ</span>
            </div> */}
            {/* // TODO ask roy for help, also for the min max width */}
            {bag.map((item) => {
                return <CartTablePreview item={item} key={item.product._id} deleteItem={deleteItem} changeQuantity={changeQuantity} />
            })}
        </div>
    )
}
