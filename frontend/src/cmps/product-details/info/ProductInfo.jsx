import React, { Component } from 'react'

export default class ProductInfo extends Component {
    state = { openTab: 'Description' }

    onTabClick = (tabName) => {
        this.setState({openTab: tabName});
    }

    render() {
        const { openTab } = this.state;
        return (
            <div className="product-info">
                <ul className="info-tabs flex">
                    <li className={openTab !== 'Description' || 'active'} onClick={()=>this.onTabClick('Description')}>Description</li>
                    <li className={openTab !== 'Specification' || 'active'} onClick={()=>this.onTabClick('Specification')}>Specification</li>
                </ul>
            </div>
        )
    }
}
