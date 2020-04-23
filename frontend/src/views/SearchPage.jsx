import React, { Component } from 'react'

import { connect } from 'react-redux';
import { loadSearchData, updateFilterBy } from '../actions/searchActions';

import ProductList from '../cmps/product/ProductList.jsx';
import FilterList from '../cmps/filter/FilterList.jsx';
import Spinner from '../cmps/general/Spinner.jsx';

class SearchPage extends Component {

    componentDidMount() {
        this.loadSearchData();
    }

    loadSearchData = () => {
        const { term } = this.props.match.params;
        const { filterBy, updateFilterBy, loadSearchData } = this.props;
        filterBy.searchValue = term;
        filterBy.categoryId = null;

        updateFilterBy(filterBy);
        loadSearchData(filterBy);
    }

    componentDidUpdate(prevProps) {
        const { filterBy} = this.props;
        if (prevProps.match.params.term !== this.props.match.params.term) {
            filterBy.filters = [];
            filterBy.priceFilter = { max: null, min: null };
            this.loadSearchData();
        }
        if (prevProps.filterBy !== filterBy) {
            this.loadSearchData();
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
        const { term } = this.props.match.params;
        if (!products) return <Spinner />
        console.log('products length: ', products.length);
        console.log('term: ', term);
        
        return (
            <div className='flex'>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);