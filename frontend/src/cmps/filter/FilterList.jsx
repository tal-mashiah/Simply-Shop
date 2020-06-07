import React from 'react';
import FilterPreview from '../filter/FilterPreview.jsx';
import FilterPrice from './FilterPrice.jsx';
import Spinner from '../general/Spinner.jsx';

export default function FilterList({ filters, priceFilter, isFiltersShown, isLoading, updatePrice, updateFilters, toggleFilters }) {

    return (
        <div className={`filter-list ${isFiltersShown ? 'open' : ''}`}>
            <div className="close"><i className="fas fa-times" onClick={toggleFilters}></i></div>
            {isLoading && <Spinner/>}
            <FilterPrice priceFilter={priceFilter} updatePrice={updatePrice} />

            {filters.map((filter, idx) => {
                return <FilterPreview updateFilters={updateFilters} filter={filter} key={idx} />
            })}
            <div className="close-btn main-btn primary flex justify-center align-center" onClick={toggleFilters}>סגור</div>
        </div>
    )
}
