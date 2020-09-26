import React, { useState, useEffect } from 'react'
import FilterOptionList from './FilterOptionList.jsx';

export default function FilterPreview({ filter, updateFilters }) {
    const [isFiltersShown, setIsFiltersShown] = useState(false)

    useEffect(() => {
        const isSomeSelected = filter.values.some(value => value.selected === true);
        setIsFiltersShown(isSomeSelected);
    }, [filter.values])

    const toggleFilters = () => {
        setIsFiltersShown(isFiltersShown => !isFiltersShown)
    }

    return (
        <div className="filter-preview flex column">
            <div className="filter-title-container flex justify-between" onClick={toggleFilters}>
                <h3 className="filter-title">{filter.key}</h3>
                <i className={`fas ${isFiltersShown ? 'fa-minus' : 'fa-plus'}`}></i>
            </div>
            <FilterOptionList updateFilters={updateFilters} options={filter.values} isFiltersShown={isFiltersShown} />
        </div>
    )
}
