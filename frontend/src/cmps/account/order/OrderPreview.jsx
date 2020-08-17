import React from 'react';
import OrderProductList from './OrderProductList';

export default function OrderPreview({ order }) {
    const { date, delivery, totalAmount, orderNumber, products } = order

    return (
        <div className="order-preview">
            <div className="order-header flex align-center">
                <div className="date">זמן ביצוע ההזמנה: {new Date(date).toLocaleDateString()} - {new Date(date).toLocaleTimeString()}</div>
                <div className="order-number">מספר הזמנה: {orderNumber}</div>
            </div>
            <OrderProductList products={products} />
            <div className="order-footer flex justify-between align-center">
                <div className="delivery">סוג משלוח: {delivery.method}</div>
                <div className="total-amount">סה"כ: {totalAmount}<i className="fas fa-shekel-sign"></i></div>
            </div>
        </div>
    )

}
