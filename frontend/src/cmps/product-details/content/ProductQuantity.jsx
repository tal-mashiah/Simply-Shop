import React, { Component } from 'react'

export default class ProductQuantity extends Component {

    handleChange = (diff) => {
        this.props.onQuantityChange(diff);
    }

    render() {
        const { quantity } = this.props;
        return (
            <div className="product-quantity flex align-center justify-between">
                <label>Quantity:</label>
                <div className="quantity-bar flex">
                    <div id="dec-btn" className="spinner-btn" onClick={() => this.handleChange(-1)}><i className="fas fa-minus"></i></div>
                    <input type="number" value={quantity} readOnly />
                    <div id="inc-btn" className="spinner-btn" onClick={() => this.handleChange(1)}><i className="fas fa-plus"></i></div>
                </div>
            </div>

        )
    }
}
