import React from 'react';
import OrderPreview from './OrderPreview.jsx';

export default function OrderList({ orders }) {
    return (
        <div className="order-list">
            {orders.map((order) => {
                return <OrderPreview order={order} key={order._id} />
            })}
        </div>
    )
}
