import React from 'react';

const PriceContainer = ({ price, salePrice, quantity }) => {
    return (
        <div className="price-container">
            <div className={`price ${salePrice ? 'sale' : ''}`}>{price*quantity}<i className="fas fa-shekel-sign"></i></div>
            {salePrice && <div className="price">{salePrice*quantity}<i className="fas fa-shekel-sign"></i></div>}
        </div>
    )
}

export default PriceContainer

PriceContainer.defaultProps = {
    quantity: 1
}