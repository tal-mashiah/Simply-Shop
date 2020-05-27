import React, { Component } from 'react';
import orderService from '../../../services/orderService';
import OrderList from './OrderList';

export default class Order extends Component {
    state = { orders: null }

    componentDidMount() {
        this.loadOrders();
    }

    loadOrders = async () => {
        const orders = await orderService.getByUserId(this.props.userId);
        this.setState({ orders })
    }

    render() {
        const { orders } = this.state;
        console.log(orders);
        return (

            <div className="order">
                {orders
                    ? <OrderList orders={orders} />
                    : <h1>אין היסטוריית הזמנות</h1>}
            </div>
        )
    }
}
