import React, { Component } from 'react'
import ProductQuantity from './ProductQuantity.jsx';

export default class ProductContent extends Component {
    state = { quantity: 1, min: 1, max: 10 }

    componentDidUpdate() {
        const { quantity, min, max } = this.state;
        if (quantity < min) {
            this.setState({ quantity: min })
        }
        if (quantity > max) {
            this.setState({ quantity: max })
        }
    }

    changeQuantity = (diff) => {
        this.setState({ quantity: this.state.quantity + diff })
    }

    onAddToBag = () => {
        const { quantity } = this.state;
        const { product } = this.props
        this.props.addToBag({ product, quantity })
    }

    render() {
        const { title, price } = this.props.product;
        const { quantity } = this.state;
        return (
            <div className="product-content">

                <div className="gallery-zoom" id="myPortal" />

                <div className="top-content flex column justify-between">
                    <h1 className="content-title flex column">{title}</h1>
                    {quantity === 1 || <span>Total amount for {quantity} units:</span>}
                    <div className="content-price"><i className="fas fa-dollar-sign"></i>{price * quantity}</div>
                </div>

                <ProductQuantity quantity={quantity} changeQuantity={this.changeQuantity} />

                <div className="buy-container flex justify-between align-center">
                    <button id="buy-btn" className="main-btn">Buy now</button>
                    <button onClick={() => this.onAddToBag()} id="add-btn" className="main-btn">Add to bag</button>
                </div>
            </div>
        )
    }
}
