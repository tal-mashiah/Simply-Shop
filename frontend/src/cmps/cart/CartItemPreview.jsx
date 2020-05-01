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
                    <QuntityBar quantity={item.quantity} changeQuantity={changeQuantity} itemId={_id} />
                    <div className="total-amount">
                        <div>סה"כ עבור <span>{item.quantity > 1 ? item.quantity : null}</span> {item.quantity > 1 ? 'יחידות:' : 'יחידה אחת:'}</div>
                        <div><span>{item.quantity * price}<i className="fas fa-shekel-sign"></i></span></div>
                    </div>
                </div>


                <div className="trash flex column justify-between">
                    <i onClick={this.onDeleteItem} className="fas fa-trash-alt"></i>
                    <p className="price flex">{price}<i className="fas fa-shekel-sign"></i></p>
                </div>
            </div>
        )
    }
}
