import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderProductPreview({ product }) {
    
    const { quantity, title, price, imagesUrl, productId } = product
    return (
        <div className="order-product-preview flex">
            <Link to={`/product/${productId}`}><img src={imagesUrl[0]} alt="product img" /></Link>
            <div className="info flex column justify-between">
                <div>
                    <div className="title"><Link to={`/product/${productId}`}>{title}</Link></div>
                    <div className="quantity">כמות: {quantity}</div>
                </div>
                <div className="price">{price}<i className="fas fa-shekel-sign"></i></div>
            </div>
        </div>
    )
}
