import React, { Component } from 'react'
import FilterOptionList from './FilterOptionList.jsx';

export default class FilterPreview extends Component {
    state = { isFiltersShown: false }

    componentDidMount() {
        const isSomeSelected = this.props.filter.values.some(value => value.selected === true);
        this.setState({ isFiltersShown: isSomeSelected })
    }


    componentDidUpdate(prevProps) {
        const isSomeSelected = this.props.filter.values.some(value => value.selected === true);
        const prevCounter = prevProps.filter.values.reduce((acc, value) => value.selected ? acc = +1 : acc, 0);
        const thisCounter = this.props.filter.values.reduce((acc, value) => value.selected ? acc = +1 : acc, 0);
        if (prevCounter !== thisCounter) {
            this.setState({ isFiltersShown: isSomeSelected })
        }
    }


    toggleFilters = () => {
        this.setState(prevState => ({
            isFiltersShown: !prevState.isFiltersShown
        }));
    }

    render() {
        const { filter, updateFilters } = this.props;
        const {isFiltersShown} = this.state;
        return (
            <div className="filter-preview flex column">
                <div className="filter-title-container flex justify-between" onClick={this.toggleFilters}>
                    <h3 className="filter-title">{filter.key}</h3>
                    <i className={`fas ${isFiltersShown ? 'fa-minus' : 'fa-plus'}`}></i>
                </div>
                {isFiltersShown ?
                    <FilterOptionList updateFilters={updateFilters} options={filter.values} /> : null}
            </div>
        )
    }
}
