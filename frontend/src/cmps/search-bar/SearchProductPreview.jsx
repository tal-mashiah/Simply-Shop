import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchProductPreview extends Component {

    render() {
        const { imagesUrl, title, _id } = this.props.product;
        return (
            <Link to={`/product/${_id}`} onClick={() => this.props.onProductClick()}>
                <div className="search-product-preview flex align-center">
                    <div className="image-container">
                        <img src={imagesUrl[0].thumbnail} alt={title} />
                    </div>
                    <div className="title">{title}</div>
                </div>
            </Link>
        )
    }
}
