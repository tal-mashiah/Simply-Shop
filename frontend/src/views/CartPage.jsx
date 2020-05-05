import React, { Component } from 'react';

import { connect } from 'react-redux';
import { deleteItem, updateQuantity } from '../actions/checkoutActions';

import CartTable from '../cmps/cart-page/cart-table/CartTable.jsx';

class CartPage extends Component {

    deleteItem = (itemId) => {
        this.props.deleteItem(itemId);
    }

    changeQuantity = (diff, itemId, quantity) => {
        this.props.updateQuantity(itemId, diff, quantity);
    }

    render() {
        const { bag } = this.props;
        console.log(bag);

        return (
            <div className="cart-page">
                <CartTable bag={bag} deleteItem={this.deleteItem} changeQuantity={this.changeQuantity}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bag: state.checkout.bag
    };
};

const mapDispatchToProps = {
    deleteItem,
    updateQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);