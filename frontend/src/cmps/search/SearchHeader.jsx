import React, { useState, useEffect, useRef } from 'react';

import SelectBox from '../general/SelectBox.jsx';

export default function SearchHeader({ term, productsLength, updateSort, toggleFilters }) {

    const [isSticky, setIsSticky] = useState(false);
    const [options] = useState([
        { key: 'bestMatch', value: 'רלוונטיות' },
        { key: 'PriceAscending', value: 'מחיר: מהנמוך לגבוה' },
        { key: 'PriceDescending', value: 'מחיר: מהגבוה לנמוך' }
    ]);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    
    const title = useRef(null)

    const handleScroll = () => {
        if (window.scrollY > title.current.offsetHeight) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }

    return (
        <div className="search-header flex align-center justify-between">
            <h2 ref={title}>{productsLength === 0 ? 'לא מצאנו שום' : productsLength === 1 ? '' : productsLength} {productsLength === 1 ? 'תוצאה אחת' : 'תוצאות'} עבור <span>"{term}"</span> </h2>
            {<div className={`btns-container flex ${isSticky ? 'sticky' : ''}`}>
                <div className="filter-btn flex justify-center align-center" onClick={toggleFilters}>
                    <i className="fas fa-filter"></i>
                    <div className="title">סנן תוצאות</div>
                </div>
                {<SelectBox handleChange={updateSort} options={options} />}
            </div>}
        </div>
    )

}
