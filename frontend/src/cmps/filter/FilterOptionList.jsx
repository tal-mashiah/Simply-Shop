import React from 'react';
import FilterOptionPreview from '../filter/FilterOptionPreview.jsx';

export default function FilterOptionList({ options, updateFilters, isFiltersShown}) {

    return (
        <div className={`filter-option-list ${isFiltersShown ? 'visible' : ''}`}>
            {options.map((option) => {
                return <FilterOptionPreview updateFilters={updateFilters} option={option} key={option._id} />
            })}
        </div>
    )
}
