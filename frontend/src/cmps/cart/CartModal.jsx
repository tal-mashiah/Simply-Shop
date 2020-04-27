import React, { Component } from 'react'
import CartItemList from './CartItemList.jsx'

export default class CartModal extends Component {

    renderBagSum() {
        return this.props.bag.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)
    }

    render() {
        const { bag, deleteItem, changeQuantity } = this.props;
        return (
            <div className="cart-modal">
                <CartItemList bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity} />
                {bag.length > 0 ||
                    <div className="cart-modal-empty">
                        Your bag is currently empty
                </div>}
                <div className="cart-modal-total flex justify-between">
                    <button id="primary" className={bag.length > 0 ? "main-btn" : "main-btn disabled"}>place your order</button>
                    <div>
                        <span>Total:</span>
                        <span><i className="fas fa-dollar-sign"></i>{this.renderBagSum()}</span>
                    </div>
                </div>
            </div>
        )
    }
}
