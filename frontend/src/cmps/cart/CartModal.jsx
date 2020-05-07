import React, { Component } from 'react'
import CartItemList from './CartItemList.jsx'
import { Link } from 'react-router-dom';

export default class CartModal extends Component {

    renderBagSum() {
        return this.props.bag.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)
    }

    render() {
        const { bag, deleteItem, changeQuantity } = this.props;
        const ConditionalLink = bag.length > 0 ? Link : 'div';

        return (
            <div className="cart-modal">
                <CartItemList bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity} />
                {bag.length > 0 ||
                    <div className="cart-modal-empty">
                        עגלת הקניות שלך ריקה
                </div>}
                <div className="cart-modal-total flex justify-between align-center">
                    <ConditionalLink to="/checkout">
                        <button className={bag.length > 0 ? "main-btn primary" : "main-btn primary disabled"}>בצע הזמנה</button>
                    </ConditionalLink>
                    <div>
                        <span>סה"כ:</span>
                        <span>{this.renderBagSum()}<i className="fas fa-shekel-sign"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}
