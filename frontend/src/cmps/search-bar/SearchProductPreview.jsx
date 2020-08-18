import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchProductPreview({ product, onProductClick }) {

    const { imagesUrl, title, _id } = product;
    return (
        <Link to={`/product/${_id}`} onClick={() => onProductClick()}>
            <div className="search-product-preview flex align-center">
                <div className="image-container">
                    <img src={imagesUrl[0].thumbnail} alt={title} />
                </div>
                <div className="title">{title}</div>
            </div>
        </Link>
    )
}
