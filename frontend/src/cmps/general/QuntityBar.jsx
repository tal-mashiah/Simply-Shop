import React from 'react';

export default function QuntityBar({ changeQuantity, itemId, quantity }) {

    const handleChange = (diff) => {
        changeQuantity(diff, itemId, quantity);
    }

    return (
        <div className="quantity-bar flex">
            <div id="dec-btn" className="spinner-btn" onClick={() => handleChange(-1)}><i className="fas fa-minus"></i></div>
            <input type="number" value={quantity} readOnly />
            <div id="inc-btn" className="spinner-btn" onClick={() => handleChange(1)}><i className="fas fa-plus"></i></div>
        </div>
    )
}
