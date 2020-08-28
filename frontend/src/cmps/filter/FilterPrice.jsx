import React, { useEffect, useState } from 'react';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default function FilterPrice({ priceFilter, updatePrice }) {
    const [value, setValue] = useState({
        min: priceFilter.min,
        max: priceFilter.max
    })

    useEffect(() => {
        setValue({ min: priceFilter.generalMin, max: priceFilter.generalMax })

    }, [priceFilter.generalMin, priceFilter.generalMax])

    const onUpdatePrice = (value) => {
        updatePrice(value)
    }

    let { generalMin, generalMax } = priceFilter;
    return (
        <div className="filter-price-preview">
            <h3 className="filter-price-title">מחיר</h3>
            <div className="price-range flex">
                {generalMin <= value.min && value.max <= generalMax && <InputRange
                    maxValue={generalMax}
                    minValue={generalMin}
                    value={value}
                    onChange={value => setValue(value)}
                    onChangeComplete={value => onUpdatePrice(value)}
                />}
            </div>

        </div>
    )

}
