import React from 'react';
import OrderProductPreview from './OrderProductPreview.jsx';

export default function OrderProductList({ products }) {
    return (
        <div className="order-product-list">
            {products.map((product) => {
                return <OrderProductPreview product={product} key={product.productId} />
            })}
        </div>
    )
}