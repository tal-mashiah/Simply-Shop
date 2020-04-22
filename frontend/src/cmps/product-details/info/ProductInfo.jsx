import React, { Component } from 'react'

export default class ProductInfo extends Component {
    state = { openTab: 'Description' }

    onTabClick = (tabName) => {
        this.setState({ openTab: tabName });
    }

    renderSpecTable() {
        return this.props.productData.specs.map((spec, index) => {
            const { specKey, specValue } = spec
            return (
                <tr key={index}>
                    <td>{specKey}</td>
                    <td>{specValue}</td>
                </tr>
            )
        })
    }

    render() {
        if (!this.props.productData) return null;
        const { openTab } = this.state;
        const { product } = this.props.productData;
        if (!product) return null;
        return (
            <div className="product-info">
                <ul className="info-tabs flex">
                    <li className={openTab === 'Description' ? 'active' : ''} onClick={() => this.onTabClick('Description')}>Description</li>
                    <li className={openTab === 'Specification' ? 'active' : ''} onClick={() => this.onTabClick('Specification')}>Specification</li>
                </ul>
                {openTab !== 'Description' || <div className="product-description">{product.description}</div>}
                {openTab !== 'Specification' ||
                    <table className="product-specification">
                        <tbody>
                            {this.renderSpecTable()}
                        </tbody>
                    </table>}
            </div>
        )
    }
}
