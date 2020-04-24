import React from 'react'
import SearchResultInfo from './SearchResultInfo'
import ProductSort from './ProductSort'

export default function SearchHeader({term, productsLength, updateSort, sortBy}) {
    return (
        <div className="search-header flex align-center justify-between">
            <SearchResultInfo term={term} productsLength={productsLength}/>
            <ProductSort updateSort={updateSort} sortBy={sortBy}/>
        </div>
    )
}
