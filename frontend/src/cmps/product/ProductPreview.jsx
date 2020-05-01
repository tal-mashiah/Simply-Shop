import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class ProductPreview extends Component {

    render() {
        const { title, imagesUrl, price, _id } = this.props.product;
        return (
            <div className="product-preview">
                <Link to={`/product/${_id}`}>
                <div className="img-container">
                    <img src={imagesUrl[0]} alt={title} />
                </div>
                <div className="details-container flex column justify-between">
                    <h4 className="title">{title}</h4>
                    <h2 className="price">{price}<i className="fas fa-shekel-sign"></i></h2>
                </div>
                </Link>
            </div>
        )
    }
}
