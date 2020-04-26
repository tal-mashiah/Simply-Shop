import React, { Component } from 'react'
import CartItemList from './CartItemList.jsx'

export default class CartModal extends Component {
    render() {
        const { bag, deleteItem } = this.props;
        return (
            <div className="cart-modal">
                <CartItemList bag={bag} deleteItem={deleteItem} />
            </div>
        )
    }
}
