import React from 'react';
import Paypal from './Paypal.jsx';

export default function PaymentTotal({ bag, delivery, form, addOrder }) {

    const rendertotalSum = () => {
        return bag.reduce((acc, item) => acc + ((item.product.salePrice || item.product.price) * item.quantity), 0)
    }

    const sum = rendertotalSum();
    if (!delivery) return null;
    return (
        <div className="payment-total">
            <div className="sub-total">סכום ביניים: {sum} <i className="fas fa-shekel-sign"></i></div>
            <div className="delivery">דמי משלוח: {delivery.price} <i className="fas fa-shekel-sign"></i></div>
            <div className="total">סה"כ לתשלום: {delivery.price + sum} <i className="fas fa-shekel-sign"></i></div>
            {form.isValid ? <Paypal totalPayment={delivery.price + sum} addOrder={addOrder} /> : <button className="main-btn primary disabled">תשלום דרך PayPal</button>}
        </div>
    )
}
