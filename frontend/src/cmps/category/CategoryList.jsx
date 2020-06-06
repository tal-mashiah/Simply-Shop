import React from 'react';
import CategoryPreview from '../category/CategoryPreview.jsx';

export default function CategoryList({ categories, isBurgerOpen, toggleBurgerModal }) {

    return (
        <div className={`category-list flex ${isBurgerOpen ? 'open' : ''}`}>
            {categories.map((category) => {
                return <CategoryPreview category={category} key={category._id} toggleBurgerModal={toggleBurgerModal} />
            })}
        </div>
    )
}
