import React, { Component } from 'react';

import { connect } from 'react-redux';
import { deleteItem, updateQuantity, setDelivery } from '../actions/checkoutActions';

import CartTable from '../cmps/checkout/cart-table/CartTable.jsx';
import Delivery from '../cmps/checkout/delivery/Delivery.jsx';
import OrderForm from '../cmps/checkout/order-form/OrderForm';

class Checkout extends Component {

    onDeliverySelected = (option) => {
        this.props.setDelivery(option);
    }

    deleteItem = (itemId) => {
        this.props.deleteItem(itemId);
    }

    changeQuantity = (diff, itemId, quantity) => {
        this.props.updateQuantity(itemId, diff, quantity);
    }

    render() {
        const { bag, delivery } = this.props;
        return (
            <div className="cart-page container flex column align-center">
                <div className="cart-sections">
                    <CartTable bag={bag} deleteItem={this.deleteItem} changeQuantity={this.changeQuantity} />
                    <Delivery bag={bag} delivery={delivery} onDeliverySelected={this.onDeliverySelected} />
                    <OrderForm/>
                    <div ></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bag: state.checkout.bag,
        delivery: state.checkout.delivery
    };
};

const mapDispatchToProps = {
    deleteItem,
    updateQuantity,
    setDelivery
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);