import React, { Component } from 'react'
import CartModal from './CartModal.jsx';

export default class Cart extends Component {

    renderQuantity() {
        return this.props.bag.reduce((acc, item) => acc + item.quantity, 0)
    }

    render() {
        const { bag, deleteItem } = this.props;
        return (
            <div className='link-container'>
                <div className='cart'>
                    <i className="fas fa-shopping-cart"></i>
                    <span className='cart-quantity'> {this.renderQuantity()} </span>
                    <CartModal bag={bag} deleteItem={deleteItem} />
                </div>
            </div>
        )
    }
}
