import React from 'react';
import PaymentTotal from './PaymentTotal.jsx';
import DeliveryInfo from './DeliveryInfo.jsx';

export default function Payment({ bag, delivery, form }) {
    return (
        <div>
            <h1>סיכום ההזמנה ותשלום</h1>
            <div className="flex justify-between">
                {!form.isValid || <DeliveryInfo form={form} />}
                <PaymentTotal bag={bag} delivery={delivery} form={form}/>
            </div>
        </div>
    )
}
