import React, { Component } from 'react'
import QuntityBar from '../../cmps/general/QuntityBar.jsx'

export default class CartItemPreview extends Component {

    onDeleteItem = () => {
        this.props.deleteItem(this.props.item.product._id);
    }

    render() {
        const { imagesUrl, title, price } = this.props.item.product;
        const { quantity } = this.props.item;
        return (
            <div className="cart-item-preview flex">
                <img src={imagesUrl[0].thumbnail} alt="Cart item" />
                <div className="cart-item-info flex column justify-between">
                    <h5>{title}</h5>
                    <QuntityBar quantity={quantity} />
                    <div className="total-amount">
                        <div>Total amount for <span>{quantity}</span> units:</div>
                        <div><span><i className="fas fa-dollar-sign"></i>{quantity * price}</span></div>
                    </div>
                </div>
                    

                <div className="trash flex column justify-between">
                    <i onClick={this.onDeleteItem} className="fas fa-trash-alt"></i>
                    <p className="price flex"><i className="fas fa-dollar-sign"></i>{price}</p>
                </div>
            </div>
        )
    }
}
// TODO
//changeQuantity={changeQuantity}