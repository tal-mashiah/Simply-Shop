import React from 'react';

export default function FilterPreview({ option, updateFilters }) {

    const onToggleOption = () => {
        updateFilters(option)
    }

    const { name, _id, selected } = option;
    return (
        <div className="filter-option-preview">
            <div className="option-container flex">
                <input className="option-checkbox" type="checkbox" id={_id} checked={selected || false} onChange={() => onToggleOption()}></input>
                <label className="option-title" htmlFor={_id}>{name}</label>
            </div>
        </div>
    )

}