import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteItem, updateQuantity, setDelivery, updateForm, addOrder } from '../actions/checkoutActions';
import { logout } from '../actions/UserActions';

import CartTable from '../cmps/checkout/cart-table/CartTable.jsx';
import Delivery from '../cmps/checkout/Delivery.jsx';
import OrderForm from '../cmps/checkout/OrderForm.jsx';
import Payment from '../cmps/checkout/payment/Payment.jsx';

function Checkout({ location, bag, delivery, setDelivery, form, loggedInUser, logout, addOrder, deleteItem, updateQuantity, updateForm }) {

    const formRef = useRef(null)

    useEffect(() => {
        if (formRef.current && location.hash) {
            var timer = setTimeout(() => {
                window.scrollTo({
                    behavior: "smooth",
                    top: formRef.current.offsetTop
                });
            }, 0);
        }
        return () => clearTimeout(timer);
    }, [location]);

    const onDeliverySelected = (option) => {
        setDelivery(option);
    }

    const onDeleteItem = (itemId) => {
        deleteItem(itemId);
    }

    const changeQuantity = (diff, itemId, quantity) => {
        updateQuantity(itemId, diff, quantity);
    }

    const onUpdateForm = (isValid, form) => {
        updateForm(isValid, form);
    }

    const onAddOrder = (type) => {
        let order = {};
        order.date = Date.now();
        order.checkoutInfo = form.input;
        order.userId = loggedInUser ? loggedInUser._id : null;
        order.totalAmount = bag.reduce((acc, item) => acc + (item.product.price * item.quantity), delivery.price);
        order.delivery = {
            method: delivery.value,
            price: delivery.price
        };
        order.products = bag.map(item => {
            return {
                productId: item.product._id,
                quantity: item.quantity,
                price: item.product.price
            }
        });
        addOrder(type, order)
    }

    return (
        <div className="cart-page container flex column align-center">
            {bag.length ?
                <div className="cart-sections">
                    <CartTable bag={bag} deleteItem={onDeleteItem} changeQuantity={changeQuantity} />
                    <Delivery bag={bag} delivery={delivery} onDeliverySelected={onDeliverySelected} />
                    <div ref={formRef}>
                        <OrderForm user={loggedInUser} updateForm={onUpdateForm} logout={logout} />
                    </div>
                    <Payment bag={bag} delivery={delivery} form={form} addOrder={onAddOrder} />
                </div> :
                <div className="empty-cart flex align-center column justify-center">
                    <div className="title"> העגלה שלך ריקה</div>
                    <Link to="/"><button className="main-btn primary">חזרה לקניות</button></Link>
                </div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
        delivery: state.checkout.delivery,
        form: state.checkout.form,
        bag: state.checkout.bag
    };
};

const mapDispatchToProps = {
    updateQuantity,
    setDelivery,
    deleteItem,
    updateForm,
    addOrder,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);