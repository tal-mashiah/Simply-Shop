import React from 'react';
import { Link } from 'react-router-dom';

const ColumnPreview = ({ data, toggleCompareProduct }) => {

    const { product, specs } = data;
    return (
        <div className="column-preview flex column justify-center">
            <div className="product flex column align-center">
                <i className="fa fa-times" onClick={() => toggleCompareProduct(product)}></i>
                <Link to={`/product/${product._id}`}> <img src={product.imagesUrl[0].thumbnail} alt={product.title} /></Link>
                <div className="price">{product.price}<i className="fas fa-shekel-sign"></i></div>
                <Link to={`/product/${product._id}`}><div className="title">{product.title}</div></Link>
            </div>
            <div className="specs-container">
                {specs.map((spec, idx) => {
                    return <div className="spec flex justify-center align-center" key={idx}> {spec.specValue}</div>
                })}
            </div>
        </div>
    )
}

export default ColumnPreview
