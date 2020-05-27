import React, { Component } from 'react';
import orderService from '../../services/orderService';

export default class Order extends Component {
    state = { orders: [] }

    componentDidMount() {
        this.loadOrders();
    }

    loadOrders = async () => {
        const orders = await orderService.getById();
        this.setState({ orders })
    }
    
    render() {
        return (
            <div className="order">
                <h1>אין היסטוריית הזמנות</h1>
            </div>
        )
    }
}
