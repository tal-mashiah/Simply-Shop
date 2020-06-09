import React from 'react'
import CartTablePreview from './CartTablePreview'

export default function CartTableList({ bag, deleteItem, changeQuantity }) {
    return (
        <div className="cart-table-list">

            <div className="cart-table-header flex">
                <div className="col-2">מוצר</div>
                <div className="col-3">מחיר</div>
                <div className="col-4">כמות</div>
                <div className="col-5">סה"כ</div>
                <div className="col-6"></div>
            </div>

            {bag.map((item) => {
                return <CartTablePreview item={item} key={item.product._id} deleteItem={deleteItem} changeQuantity={changeQuantity} />
            })}
        </div>
    )
}
