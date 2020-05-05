import React from 'react'
import CartTablePreview from './CartTablePreview'

export default function CartTableList({ bag, deleteItem, changeQuantity }) {
    return (
        <tbody>
            {bag.map((item) => {
                return <CartTablePreview item={item} key={item.product._id} deleteItem={deleteItem} changeQuantity={changeQuantity} />
            })}
        </tbody>
    )
}
