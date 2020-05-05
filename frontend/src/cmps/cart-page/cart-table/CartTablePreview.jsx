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
            <tr>
                <td><img src={imagesUrl[0].thumbnail} alt="product img" /></td>
                <td className="title"><Link to={`/product/${_id}`}>{title}</Link></td>
                <td><QuntityBar quantity={item.quantity} changeQuantity={changeQuantity} itemId={_id} /></td>
                <td>{price}</td>
                <td>{price * item.quantity}</td>
                <td><i onClick={this.onDeleteItem} className="fas fa-trash-alt"></i></td>
            </tr>
        )
    }
}
