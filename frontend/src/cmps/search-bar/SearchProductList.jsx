import React from 'react'
import SearchProductPreview from './SearchProductPreview'

export default function SearchProductList({ products, onProductClick }) {
    return (
        <div className="search-product-list">
            {products.map((product) => {
                return <SearchProductPreview product={product} onProductClick={onProductClick} key={product._id} />
            })}
        </div>
    )
}