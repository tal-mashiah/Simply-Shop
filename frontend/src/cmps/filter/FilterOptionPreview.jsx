import React, { Component } from 'react'

export default class FilterPreview extends Component {

    onToggleOption = () => {
        this.props.updateFilters(this.props.option)
    }

    render() {
        const { name, _id, selected} = this.props.option;
        return (
            <div className="filter-option-preview">
                <div className="option-container flex">
                    <input className="option-checkbox" type="checkbox" id={_id} checked={selected || false} onChange={() => this.onToggleOption()}></input>
                    <label className="option-title" htmlFor={_id}>{name}</label>
                </div>
            </div>
        )
    }
}