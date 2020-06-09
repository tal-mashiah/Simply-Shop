import React from 'react';
import PaymentTotal from './PaymentTotal.jsx';
import DeliveryInfo from './DeliveryInfo.jsx';

export default function Payment({ bag, delivery, form, addOrder }) {
    return (
        <div>
            <h1>סיכום ההזמנה ותשלום</h1>
            <div className="payment flex justify-between">
                {!form.isValid || <DeliveryInfo form={form} />}
                <PaymentTotal bag={bag} delivery={delivery} form={form} addOrder={addOrder}/>
            </div>
        </div>
    )
}
