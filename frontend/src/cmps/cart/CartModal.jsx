import React, { Component } from 'react'
import CartItemList from './CartItemList.jsx'

export default class CartModal extends Component {
    render() {
        const { bag, deleteItem, changeQuantity } = this.props;
        return (
            <div className="cart-modal">
                <CartItemList bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity}/>
            </div>
        )
    }
}
