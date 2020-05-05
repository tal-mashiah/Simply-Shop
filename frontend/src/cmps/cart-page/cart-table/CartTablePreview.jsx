import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import QuntityBar from '../../general/QuntityBar.jsx';

export default class CartTablePreview extends Component {

    onDeleteItem = () => {
        this.props.deleteItem(this.props.item.product._id);
    }

    render() {
        const { _id, title, price, imagesUrl } = this.props.item.product;
        const { item, changeQuantity } = this.props;
        return (
            <div className="cart-table-preview flex align-center justify-between">
                <Link to={`/product/${_id}`}><img src={imagesUrl[0].thumbnail} alt="product img" /></Link>
                <div className="title"><Link to={`/product/${_id}`}>{title}</Link></div>
                <div className="price">{price}<i className="fas fa-shekel-sign"></i></div>
                <QuntityBar quantity={item.quantity} changeQuantity={changeQuantity} itemId={_id} />
                <div className="price">{price * item.quantity}<i className="fas fa-shekel-sign"></i></div>
                <i className="fas fa-trash-alt" onClick={this.onDeleteItem}></i>
            </div>
        )
    }
}
