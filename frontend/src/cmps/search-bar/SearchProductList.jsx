import React from 'react'
import SearchProductPreview from './SearchProductPreview'

export default function SearchProductList({ products, onProductClick, productSelectedIndex }) {
    return (
        <div className="search-bar-modal-container">
            {products.map((product,idx) => {
                return <SearchProductPreview product={product} onProductClick={onProductClick} key={product._id} idx={idx+1} productSelectedIndex={productSelectedIndex}/>
            })}
        </div>
    )
}
