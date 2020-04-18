import React from 'react';
import ProductPreview from '../product/ProductPreview.jsx';

export default function ProductList(props) {
    const {products} = props;
    return (
        <div className="product-list">
            {products.map((product,idx) => {
                return <ProductPreview product={product} key={idx}/>
            })}
        </div>
    )
}
