import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import PriceContainer from '../general/PriceContainer';

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
        const isCompare = compareProducts.some(comparedProduct => comparedProduct._id === product._id)
        setIsCompared(isCompare);
    }, [compareProducts, product._id])

    const { title, imagesUrl, price, inStock, salePrice } = product;
    return (
        <div className={`product-preview ${inStock ? '' : 'out-of-stock'}`} onClick={moveToProductPage}>
            {salePrice && <div className="sale-modal flex align-center justify-center">{`${Math.round((price - salePrice) / price * 100)}% הנחה`}</div>}
            <div className="img-container square-ratio">
                <img src={imagesUrl[0]} onMouseOver={e => (e.currentTarget.src = imagesUrl[1])} onMouseOut={e => (e.currentTarget.src = imagesUrl[0])} alt={title} />
            </div>
            <div className="details-container flex column justify-between">
                <h4 className="title">{title}</h4>
                <div className="info-continer flex justify-between">
                    <PriceContainer price={price} salePrice={salePrice} />
                    {inStock
                        ? <div className={`compare ${isCompared ? 'remove' : ''}`} onClick={onToggleCompareProduct}>{isCompared ? 'הסר מהשוואה' : `הוסף להשוואה`}</div>
                        : <div className="in-stock">אזל המלאי</div>
                    }
                </div>
            </div>
        </div>
    )

}
