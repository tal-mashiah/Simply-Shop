import React, { Component } from 'react'

export default class OrderPreview extends Component {
    render() {
        const {date,delivery,totalAmount} = this.props.order
        return (
            <div className="order-preview">
                <h1>date: {new Date(date).toLocaleDateString()}</h1>
                <h1>totalAmount: {totalAmount}</h1>
            </div>
        )
    }
}
