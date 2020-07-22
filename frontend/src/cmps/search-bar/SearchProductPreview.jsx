import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchProductPreview extends Component {

    render() {
        const { imagesUrl, title, _id } = this.props.product;
        return (
            <Link to={`/product/${_id}`}>
                <div className="search-product-preview flex align-center" onClick={()=>this.props.onProductClick()}>
                    <img src={imagesUrl[0]} alt={title} />
                    <div className="title">{title}</div>
                </div>
            </Link>
        )
    }
}
