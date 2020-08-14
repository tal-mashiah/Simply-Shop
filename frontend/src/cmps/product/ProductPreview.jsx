import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductPreview({product}) {
    
    const { title, imagesUrl, price, _id, inStock } = product;
    return (
        <div className={`product-preview ${inStock ? '' : 'out-of-stock'}`}>
            <Link to={`/product/${_id}`}>
                <div className="img-container square-ratio">
                    <img src={imagesUrl[0]} onMouseOver={e => (e.currentTarget.src = imagesUrl[1])} onMouseOut={e => (e.currentTarget.src = imagesUrl[0])} alt={title} />
                </div>
                <div className="details-container flex column justify-between">
                    <h4 className="title">{title}</h4>
                    <div className="info-continer flex justify-between">
                        <h2 className="price">{price}<i className="fas fa-shekel-sign"></i></h2>
                        <div className="in-stock">{inStock ? '' : 'אזל המלאי'}</div>
                    </div>
                </div>
            </Link>
        </div>
    )

}
