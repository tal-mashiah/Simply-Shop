import React, { Component } from 'react'

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default class FilterPrice extends Component {

    state = {
        value: {
            min: this.props.priceFilter.min,
            max: this.props.priceFilter.max
        }
    };

    componentDidUpdate() {
        const { generalMin, generalMax } = this.props.priceFilter;
        const { min, max } = this.state.value;
        if (generalMin !== min && generalMax !== max) {
            this.setState({ value: { min: this.props.priceFilter.min, max: this.props.priceFilter.max } })
        }
    }

    onUpdatePrice = () => {
        this.props.updatePrice(this.state.value)
    }

    render() {
        const { value } = this.state;
        const { generalMin, generalMax, min, max } = this.props.priceFilter;
        if (generalMin === generalMax || min === max) return null;
        return (
            <div className="filter-price-preview">
                <h3 className="filter-price-title">Price</h3>
                <InputRange
                    maxValue={generalMax}
                    minValue={generalMin}
                    value={value}
                    onChange={value => this.setState({ value })}
                    onChangeComplete={value => this.onUpdatePrice()} />
            </div>
        )
    }
}
