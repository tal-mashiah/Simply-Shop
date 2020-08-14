import React from 'react';
import FilterPreview from '../filter/FilterPreview.jsx';
import FilterPrice from './FilterPrice.jsx';

export default function FilterList({ filters, priceFilter, isFiltersShown, updatePrice, updateFilters, toggleFilters }) {

    return (
        <div className={`filter-list ${isFiltersShown ? 'open' : ''}`}>
            <div className="close"><i className="fas fa-times" onClick={toggleFilters}></i></div>
            <FilterPrice priceFilter={priceFilter} updatePrice={updatePrice}/>
            {filters.map((filter, idx) => {
                return <FilterPreview updateFilters={updateFilters} filter={filter} key={idx} />
            })}
            <div className="close-btn main-btn primary flex justify-center align-center" onClick={toggleFilters}>סגור</div>
        </div>
    )
}
