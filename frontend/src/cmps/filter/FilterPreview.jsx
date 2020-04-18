import React, { Component } from 'react'
import FilterOptionList from './FilterOptionList.jsx';

export default class FilterPreview extends Component {
    state = { isFiltersShown: false }

    toggleFilters = () => {
        this.setState(prevState => ({
            isFiltersShown: !prevState.isFiltersShown
        }));
    }

    render() {
        const { filter, updateFilters } = this.props;
        return (
            <div className="filter-preview flex column">
                <div className="filter-title-container flex justify-between" onClick={this.toggleFilters}>
                    <h3 className="filter-title">{filter.key}</h3>
                    <i className="fas fa-plus"></i>
                </div>
                {this.state.isFiltersShown ?
                    <FilterOptionList updateFilters={updateFilters} options={filter.values} /> : null}
            </div>
        )
    }
}
