
import React from 'react'
import QuntityBar from '../../general/QuntityBar.jsx'

export default function ProductQuantity({ quantity, changeQuantity }) {
    return (
        <div className="product-quantity flex align-center justify-between">
            <label>Quantity:</label>
            <QuntityBar quantity={quantity} changeQuantity={changeQuantity}/>
        </div>
    )
}
