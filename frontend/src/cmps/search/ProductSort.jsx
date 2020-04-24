import React, { Component } from 'react'

export default class ProductSort extends Component {
    state = {
        order: this.props.sortBy,
        isOptionsShown: false,
        options: [
            { key: 'bestMatch', value: 'Best Match' },
            { key: 'PriceAscending', value: 'Price: Low to High' },
            { key: 'PriceDescending', value: 'Price: High to Low' }
        ]
    };

    showOptions = () => {
        this.setState(prevState => ({
            isOptionsShown: !prevState.isOptionsShown
        }));

    }

    handleOptionClick = (option) => {
        this.setState({ order: option.value, isOptionsShown: false })
        if (option !== this.state.order) {
            this.props.updateSort(option.key);
        }
    }

    render() {
        const { order, isOptionsShown, options } = this.state;
        return (
            <div className="product-sort">
                <div onClick={() => this.showOptions()} className={`sort-title ${isOptionsShown ? 'active' : ''}`}>{order}</div>
                {!isOptionsShown ||
                    <div className={`sort-options-container ${isOptionsShown ? 'active' : ''}`}>
                        {options.map((option, idx) => {
                            return <div key={idx} onClick={() => this.handleOptionClick(option)} className="sort-option">{option.value}</div>
                        })}
                    </div>}
            </div>
        )
    }
}
