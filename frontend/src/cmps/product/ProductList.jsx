import React from 'react';
import ProductPreview from '../product/ProductPreview.jsx';

export default function ProductList({products, toggleCompareProduct}) {
    return (
        <div className="product-list">
            {products.map((product) => {
                return <ProductPreview product={product} key={product._id} toggleCompareProduct={toggleCompareProduct}/>
            })}
        </div>
    )
}
