import React, { Component } from 'react'

export default class ProductSort extends Component {
    state = {
        order: 'רלוונטיות',
        isOptionsShown: false,
        options: [
            { key: 'bestMatch', value: 'רלוונטיות' },
            { key: 'PriceAscending', value: 'מחיר: מהנמוך לגבוה' },
            { key: 'PriceDescending', value: 'מחיר: מהגבוה לנמוך' }
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
