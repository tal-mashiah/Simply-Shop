import React, { Component } from 'react'

import ProductQuantity from './ProductQuantity.jsx';
import { Link } from 'react-router-dom';

export default class ProductContent extends Component {
    state = { quantity: 1, min: 1, max: 25 }

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
        const { product, setGrowl, addToBag } = this.props;
        if(!this.props.product.inStock) return;
        addToBag({ product, quantity });
        setGrowl(quantity > 1 ? `${quantity} מוצרים התווספו לעגלה` : `המוצר התווסף לעגלה`, 'info')
    }

    render() {
        const { title, price, inStock } = this.props.product;
        const { quantity } = this.state;
        const ConditionalLink = inStock ? Link : 'div';

        return (
            <div className="product-content">
                <div className="top-content flex column justify-between">
                    <h1 className="content-title flex column">{title}</h1>
                    {quantity === 1 || <span> סה"כ עבור {quantity} יחידות:</span>}
                    <div className="info-continer flex justify-between">
                        <div className="in-stock">{inStock ? '' : 'אזל המלאי'}</div>
                        <div className="content-price">{price * quantity}<i className="fas fa-shekel-sign"></i></div>
                    </div>
                </div>

                <ProductQuantity quantity={quantity} changeQuantity={this.changeQuantity} />
                <div className="buy-container flex justify-between align-center">
                    <button className={`main-btn secondary ${inStock?'':'disabled'}`} onClick={() => this.onAddToBag()} >הוסף לסל</button>
                    <ConditionalLink to={'/checkout'} className="buy-now-container"><button className={`main-btn primary ${inStock?'':'disabled'}`} onClick={() => this.onAddToBag()}>קנה עכשיו</button></ConditionalLink>
                </div>
            </div>

        )
    }
}
