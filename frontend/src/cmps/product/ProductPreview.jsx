import React, { Component } from 'react'
export default class ProductPreview extends Component {

    render() {
        const { title, imagesUrl, price } = this.props.product;
        return (
            <div className="product-preview">
                <div className="img-container">
                    <img src={imagesUrl[0]} alt={title} />
                </div>
                <div className="details-container flex column justify-between">
                    <h4 className="title">{title}</h4>
                    <h2 className="price">{price}</h2>
                </div>
            </div>
        )
    }
}
