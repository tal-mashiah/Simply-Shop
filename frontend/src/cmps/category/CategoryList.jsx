import React from 'react';
import CategoryPreview from '../category/CategoryPreview.jsx';

export default function CategoryList({categories}) {

    return (
        <div className="category-list flex">
            {categories.map((category,idx) => {
                return <CategoryPreview category={category} key={idx}/>
            })}
        </div>
    )
}
