import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryPreview({category,toggleBurgerModal}) {
    const { name, _id } = category;
    return (
        <div className="category-preview" onClick={toggleBurgerModal}>
                <Link to={`/category/${name}/${_id}`}>
                <h3>{name}</h3>
                </Link>
            </div>
    )
}
