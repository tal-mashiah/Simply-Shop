import React from 'react';
import CategoryPreview from '../category/CategoryPreview.jsx';

export default function CategoryList({categories}) {

    return (
        <div className="category-list flex">
            {categories.map((category) => {
                return <CategoryPreview category={category} key={category._id}/>
            })}
        </div>
    )
}
