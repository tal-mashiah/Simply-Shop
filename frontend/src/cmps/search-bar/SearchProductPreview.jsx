import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function SearchProductPreview({ product, onProductClick, productSelectedIndex, idx }) {
    const history = useHistory();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter" && productSelectedIndex === idx) {
                history.push(`/product/${product._id}`);
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [productSelectedIndex, idx, product._id, history])

    const { image, title, _id } = product;
    return (
        <Link to={`/product/${_id}`} onClick={() => onProductClick()}>
            <div className={`search-product-preview flex align-center ${productSelectedIndex === idx ? 'key-selected' : ''}`}>
                <div className="image-container">
                    <img src={image} alt={title} />
                </div>
                <div className="title">{title}</div>
            </div>
        </Link>
    )
}
