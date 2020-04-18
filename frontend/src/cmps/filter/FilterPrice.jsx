import React, { Component } from 'react'

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default class FilterPrice extends Component {

    state = {
        value: {
            min: this.props.priceFilter.min,
            max: this.props.priceFilter.max
        },
        generalMin:this.props.priceFilter.min,
        generalMax:this.props.priceFilter.max

    };

    componentDidMount() {
        this.setState({})
    }
    

    onUpdatePrice = () => {
        this.props.updatePrice(this.state.value)
    }

    render() {
        const { generalMax, generalMin ,value} = this.state;
        return (
            <div className="filter-preview">
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
