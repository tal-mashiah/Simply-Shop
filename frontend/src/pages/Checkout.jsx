import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { deleteItem, updateQuantity, setDelivery, updateForm } from '../actions/checkoutActions';
import { logout } from '../actions/UserActions';

import CartTable from '../cmps/checkout/cart-table/CartTable.jsx';
import Delivery from '../cmps/checkout/Delivery.jsx';
import OrderForm from '../cmps/checkout/OrderForm.jsx';
import Payment from '../cmps/checkout/payment/Payment.jsx';

class Checkout extends Component {
    state = { isFirstLoad: true }

    componentDidUpdate() {
        const {isFirstLoad} = this.state;
        let hash = this.props.location.hash.replace('#', '');
        if (hash && isFirstLoad) {
            let node = ReactDOM.findDOMNode(this.refs[hash]);
            if (node) {
                node.scrollIntoView();
            }
            this.setState({isFirstLoad:false})
        }
    }

    onDeliverySelected = (option) => {
        this.props.setDelivery(option);
    }

    deleteItem = (itemId) => {
        this.props.deleteItem(itemId);
    }

    changeQuantity = (diff, itemId, quantity) => {
        this.props.updateQuantity(itemId, diff, quantity);
    }

    updateForm = (isValid, form) => {
        this.props.updateForm(isValid, form);
    }

    render() {
        const { bag, delivery, form, loggedInUser, logout } = this.props;

        return (
            <div className="cart-page container flex column align-center">
                {bag.length ?
                    <div className="cart-sections">
                        <CartTable bag={bag} deleteItem={this.deleteItem} changeQuantity={this.changeQuantity} />
                        <Delivery bag={bag} delivery={delivery} onDeliverySelected={this.onDeliverySelected} />
                        <div ref='form'></div>
                        <OrderForm user={loggedInUser} updateForm={this.updateForm} logout={logout} />
                        <Payment bag={bag} delivery={delivery} form={form} />
                    </div> :
                    <div className="empty-cart flex align-center">העגלה שלך ריקה</div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bag: state.checkout.bag,
        delivery: state.checkout.delivery,
        form: state.checkout.form,
        loggedInUser: state.user.loggedInUser
    };
};

const mapDispatchToProps = {
    deleteItem,
    updateQuantity,
    setDelivery,
    updateForm,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);