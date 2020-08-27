import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function ProductPreview({ product, toggleComparedProduct, compareProducts }) {
    const [isCompared, setIsCompared] = useState(false);

    const history = useHistory();

    const onToggleCompareProduct = (ev) => {
        ev.stopPropagation();
        toggleComparedProduct(product)
    }

    const moveToProductPage = () => {
        history.push(`/product/${product._id}`);
    }

    useEffect(() => {
        const isCompare = compareProducts.some(comparedProduct=>comparedProduct._id === product._id)
        setIsCompared(isCompare);
    }, [compareProducts])

    const { title, imagesUrl, price, inStock } = product;
    return (
        <div className={`product-preview ${inStock ? '' : 'out-of-stock'}`} onClick={moveToProductPage}>
            <div className="img-container square-ratio">
                <img src={imagesUrl[0]} onMouseOver={e => (e.currentTarget.src = imagesUrl[1])} onMouseOut={e => (e.currentTarget.src = imagesUrl[0])} alt={title} />
            </div>
            <div className="details-container flex column justify-between">
                <h4 className="title">{title}</h4>
                <div className="info-continer flex justify-between">
                    <h2 className="price">{price}<i className="fas fa-shekel-sign"></i></h2>
                    {inStock
                        ? <div className={`compare ${isCompared ? 'remove' : ''}`} onClick={onToggleCompareProduct}>{isCompared ? 'הסר מהשוואה' : `הוסף להשוואה`}</div>
                        : <div className="in-stock">אזל המלאי</div>
                    }
                </div>
            </div>
        </div>
    )

}
