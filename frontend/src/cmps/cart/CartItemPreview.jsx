import React, { Component } from 'react'
import QuntityBar from '../../cmps/general/QuntityBar.jsx'
import { Link } from 'react-router-dom';

export default class CartItemPreview extends Component {

    onDeleteItem = () => {
        this.props.deleteItem(this.props.item.product._id);
    }

    render() {
        const { imagesUrl, title, price, _id } = this.props.item.product;
        const { item, changeQuantity } = this.props;
        return (
            <div className="cart-item-preview flex">
                <img src={imagesUrl[0].thumbnail} alt="Cart item" />
                <div className="cart-item-info flex column justify-between">
                    <Link to={`/product/${_id}`}><h5>{title}</h5></Link>
                    <div className="price flex">{price}<i className="fas fa-shekel-sign"></i></div>
                    <QuntityBar quantity={item.quantity} changeQuantity={changeQuantity} itemId={_id} />
                </div>
                {item.quantity > 1 ?
                    < div className="total-amount">
                        <span>סה"כ עבור <span>{item.quantity}</span> יחידות: </span>
                        <span>{item.quantity * price}<i className="fas fa-shekel-sign"></i></span>
                    </div> : null}

                <i onClick={this.onDeleteItem} className="fas fa-trash-alt"></i>
            </div >
        )
    }
}
