import React from 'react';
import ProductPreview from '../product/ProductPreview.jsx';

export default function ProductList({products, toggleComparedProduct, compareProducts}) {
    return (
        <div className="product-list">
            {products.map((product) => {
                return <ProductPreview product={product} key={product._id} toggleComparedProduct={toggleComparedProduct} compareProducts={compareProducts}/>
            })}
        </div>
    )
}
