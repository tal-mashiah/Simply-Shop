import React, { Component } from 'react'

export default class ProductSort extends Component {
    state = { order: this.props.sortBy, isOptionsShown: false };

    showOptions = () => {
        this.setState(prevState => ({
            isOptionsShown: !prevState.isOptionsShown
        }));

    }

    handleOptionClick = (option) => {
        this.setState({ order: option, isOptionsShown: false })
        if (option !== this.state.order) {
            this.props.updateSort(option);
        }
    }

    render() {
        const { order, isOptionsShown } = this.state;
        return (
            <div className="product-sort">
                <div onClick={() => this.showOptions()} className={`sort-title ${isOptionsShown ? 'active' : ''}`}>{order}</div>
                {!isOptionsShown ||
                    <div className={`sort-options-container ${isOptionsShown ? 'active' : ''}`}>
                        <div onClick={() => this.handleOptionClick('Best Match')} className="sort-option">Best Match</div>
                        <div onClick={() => this.handleOptionClick('Price: Low to High')} className="sort-option">Price: Low to High</div>
                        <div onClick={() => this.handleOptionClick('Price: High to Low')} className="sort-option">Price: High to Low</div>
                    </div>}
            </div>
        )
    }
}
