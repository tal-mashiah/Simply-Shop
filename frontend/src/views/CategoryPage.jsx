import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadSearchData, updateFilterBy } from '../actions/searchActions';

import ProductList from '../cmps/product/ProductList.jsx';
import FilterList from '../cmps/filter/FilterList.jsx';
import Spinner from '../cmps/general/Spinner.jsx';

class CategoryPage extends Component {

    componentDidMount() {
        this.loadSearchData();
    }

    loadSearchData = () => {
        const { _id } = this.props.match.params;
        const { filterBy, updateFilterBy, loadSearchData } = this.props;
        filterBy.categoryId = _id;
        filterBy.searchValue = null;
        updateFilterBy(filterBy);
        loadSearchData(filterBy);
    }

    componentDidUpdate(prevProps) {
        const { filterBy } = this.props;
        const isIdMatch = prevProps.match.params._id !== this.props.match.params._id;
        if (prevProps.filterBy !== this.props.filterBy || isIdMatch) {
            this.loadSearchData();
        }
        if (isIdMatch) {
            filterBy.priceFilter = { max: null, min: null };
            filterBy.filters = [];
            this.props.updateFilterBy(filterBy);
        }
    }

    updatePrice = (updatedPrice) => {
        let filterBy = { ...this.props.filterBy };
        filterBy.priceFilter = updatedPrice;
        this.props.updateFilterBy(filterBy);
    }

    updateFilters = (filter) => {
        let filterBy = { ...this.props.filterBy };
        const isFound = filterBy.filters.some(currFilter => currFilter.name === filter.name);
        if (isFound) {
            filterBy.filters = filterBy.filters.filter(currFilter => currFilter.name !== filter.name);
        } else {
            filterBy.filters.push(filter);
        }
        this.props.updateFilterBy(filterBy);
    }

    render() {
        const { products, filters, priceFilter } = this.props;        
        if (!products) return <Spinner />
        
        return (
            <div className='category-page flex'>
                <FilterList
                    filters={filters}
                    priceFilter={priceFilter}
                    updatePrice={this.updatePrice}
                    updateFilters={this.updateFilters}
                />
                <ProductList products={products} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.search.searchData.products,
        filters: state.search.searchData.filters,
        priceFilter: state.search.searchData.priceFilter,
        filterBy: state.search.filterBy
    };
};

const mapDispatchToProps = {
    loadSearchData,
    updateFilterBy
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);