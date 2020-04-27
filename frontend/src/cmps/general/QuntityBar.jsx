import React, { Component } from 'react'

export default class QuntityBar extends Component {

    handleChange = (diff) => {
        const { changeQuantity, itemId, quantity } = this.props;
        changeQuantity(diff, itemId, quantity);
    }

    render() {
        const { quantity } = this.props;
        return (
            <div className="quantity-bar flex">
                <div id="dec-btn" className="spinner-btn" onClick={() => this.handleChange(-1)}><i className="fas fa-minus"></i></div>
                <input type="number" value={quantity} readOnly />
                <div id="inc-btn" className="spinner-btn" onClick={() => this.handleChange(1)}><i className="fas fa-plus"></i></div>
            </div>
        )
    }
}
