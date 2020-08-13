import React, { useEffect } from 'react';

import orderService from '../../../services/orderService';
import OrderList from './OrderList';

export default function Order({ userId, loading, doneLoading, isLoading, setOrders, orders }) {

    useEffect(() => {
        if (orders) return;
        const loadOrders = async () => {
            try {
                loading();
                const orders = await orderService.getByUserId(userId);
                setOrders(orders);
            }
            finally {
                doneLoading();
            }
        }
        loadOrders();
        // eslint-disable-next-line
    },[])

    if (isLoading || !orders) return null;
    return (
        <div className="order">
            {orders.length
                ? <OrderList orders={orders} />
                : <h1>אין היסטוריית הזמנות</h1>}
        </div>
    )

}
