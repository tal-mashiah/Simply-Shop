import React, { Component } from 'react'
import OrderProductList from './OrderProductList';

export default class OrderPreview extends Component {
    render() {
        const {date,delivery,totalAmount,orderNumber,products} = this.props.order
        console.log('order: ',this.props.order);
        
        return (
            <div className="order-preview">
                <div className="order-header flex">
                    <div className="date">תאריך הזמנה: {new Date(date).toLocaleDateString()}</div>
                    <div className="order-number">מספר הזמנה: {orderNumber}</div>
                </div>
                <OrderProductList products={products}/>
            </div>
        )
    }
}
