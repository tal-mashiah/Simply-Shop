import React, { useState } from 'react'

import ProductQuantity from './ProductQuantity.jsx';
import { Link } from 'react-router-dom';
import PriceContainer from '../../general/PriceContainer.jsx';

export default function ProductContent({ setGrowl, addToBag, product }) {

    const [quantity, setQuantity] = useState(1);
    const min = 1;
    const max = 5;

    const changeQuantity = (diff) => {
        const newQuantity = quantity + diff;
        if (newQuantity >= min && newQuantity <= max) {
            setQuantity(newQuantity)
        }
    }

    const onAddToBag = (isBuyNow) => {
        if (!product.inStock) return;
        addToBag({ product, quantity }, isBuyNow);
        setGrowl(quantity > 1 ? `${quantity} מוצרים התווספו לעגלה` : `המוצר התווסף לעגלה`, 'info')
    }

    const { title, price, salePrice, inStock } = product;
    const ConditionalLink = inStock ? Link : 'div';

    return (
        <div className="product-content">
            <div className="top-content flex column justify-between">
                <h1 className="content-title flex column">{title}</h1>
                {quantity === 1 || <span> סה"כ עבור {quantity} יחידות:</span>}
                <div className="info-continer flex justify-between">
                    <div className="in-stock">{inStock ? '' : 'אזל המלאי'}</div>
                    <PriceContainer price={price} salePrice={salePrice} quantity={quantity} />
                </div>
            </div>
            <ProductQuantity quantity={quantity} changeQuantity={changeQuantity} />
            <div className="buy-container flex justify-between align-center">
                <button className={`main-btn secondary ${inStock ? '' : 'disabled'}`} onClick={() => onAddToBag(false)} >הוסף לסל</button>
                <ConditionalLink to={'/checkout'} className="buy-now-container"><button className={`main-btn primary ${inStock ? '' : 'disabled'}`} onClick={() => onAddToBag(true)}>קנה עכשיו</button></ConditionalLink>
            </div>
        </div>

    )
}

