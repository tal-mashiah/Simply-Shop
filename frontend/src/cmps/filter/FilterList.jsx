import React from 'react';
import FilterPreview from '../filter/FilterPreview.jsx';
import FilterPrice from './FilterPrice.jsx';

export default function FilterList({ filters, priceFilter, updatePrice, updateFilters }) {

    return (
        <div className="filter-list">
            <FilterPrice 
            priceFilter={priceFilter}
            updatePrice={updatePrice}/>
            
            {filters.map((filter, idx) => {
                return <FilterPreview updateFilters={updateFilters} filter={filter} key={idx} />
            })}
        </div>
    )
}
