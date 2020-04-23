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

    componentDidUpdate(prevprops) {
        const { generalMin, generalMax, min, max } = this.props.priceFilter;
        if (prevprops.priceFilter.min !== min && prevprops.priceFilter.max !== max ||
             generalMin !== prevprops.priceFilter.generalMin ||
             generalMax !== prevprops.priceFilter.generalMax) {
            this.setState({ value: { min: generalMin, max: generalMax } })
        }
    }


    onUpdatePrice = () => {
        this.props.updatePrice(this.state.value)
    }

    render() {
        const { value } = this.state;
        let { generalMin, generalMax } = this.props.priceFilter;
        return (
            <div className="filter-price-preview">
                <h3 className="filter-price-title">Price</h3>
                <div className="price-range flex">
                    <InputRange
                        maxValue={generalMax}
                        minValue={generalMin}
                        value={value}
                        onChange={value => this.setState({ value })}
                        onChangeComplete={value => this.onUpdatePrice()} />
                </div>

            </div>
        )
    }
}
