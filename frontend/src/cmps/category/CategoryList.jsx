import React from 'react';
import CategoryPreview from '../category/CategoryPreview.jsx';

export default function CategoryList({categories,toggleCategories}) {

    return (
        <div className="category-list">
            {categories.map((category,idx) => {
                return <CategoryPreview category={category} toggleCategories={toggleCategories} key={idx}/>
            })}
        </div>
    )
}
