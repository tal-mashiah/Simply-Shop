import React, { Component } from 'react';
import Paypal from './Paypal.jsx';

export default class PaymentTotal extends Component {

    rendertotalSum() {
        return this.props.bag.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)
    }

    render() {
        const { delivery, form } = this.props;
        const sum = this.rendertotalSum();
        if (!delivery) return null;        
        return (
            <div className="payment-total">
                    <div className="sub-total">סכום ביניים: {sum} <i className="fas fa-shekel-sign"></i></div>
                    <div className="delivery">דמי משלוח: {delivery.price} <i className="fas fa-shekel-sign"></i></div>
                    <div className="total">סה"כ לתשלום: {delivery.price + sum} <i className="fas fa-shekel-sign"></i></div>
                    {/* <button className={form.isValid ? "main-btn primary" : "main-btn primary disabled"}>תשלום דרך PayPal</button> */}
                    <Paypal totalPayment={delivery.price + sum}/>
                </div>
        )
    }
}
