import React, { Component } from 'react';
import SelectBox from '../general/SelectBox.jsx';

export default class Delivery extends Component {
    state = {
        options: [
            { value: 'דואר רשום', price: 0 },
            { value: 'דואר שליחים', price: 49 },
            { value: 'איסוף עצמי', price: 0 }
        ]
    };

    componentDidMount() {
        this.props.onDeliverySelected(this.state.options[0]);
    }

    rendertotalSum() {
        return this.props.bag.reduce((acc, item) => acc + (item.product.price * item.quantity), this.props.delivery.price)
    }

    render() {
        const { options } = this.state;
        const { onDeliverySelected, delivery } = this.props;

        if (!delivery) return null;

        return (
            <div className="delivery">
                <h1>סוג המשלוח</h1>
                <div className="flex justify-between align-center">
                    <SelectBox handleChange={onDeliverySelected} options={options} />
                    <div className="delivery-price">
                        עלות משלוח: {delivery.price > 0 ? delivery.price : ' חינם!'}
                        {delivery.price > 0 ? <i className="fas fa-shekel-sign"></i> : null}
                    </div>
                    <div className="total-price">סה"כ כולל משלוח: {this.rendertotalSum()}<i className="fas fa-shekel-sign"></i></div>
                </div>
            </div>
        )
    }
}
