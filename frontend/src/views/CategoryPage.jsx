import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadSearchData, updateFilterBy, updateSearchFilters } from '../actions/searchActions';

import ProductList from '../cmps/product/ProductList.jsx';
import FilterList from '../cmps/filter/FilterList.jsx';
import Spinner from '../cmps/general/Spinner.jsx';

class CategoryPage extends Component {

    componentDidMount() {
        this.loadSearchData();
    }

    loadSearchData = () => {
        this.props.loadSearchData(this.props.filterBy);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.filterBy !== this.props.filterBy){
            this.loadSearchData();
        }
        // console.log('prevProps: ',prevProps.filterBy.priceFilter);
        // console.log('this props: ',this.props.filterBy.priceFilter);
    }
    

    updatePrice = (updatedPrice) => {
        let filterBy = { ...this.props.filterBy };
        filterBy.priceFilter = updatedPrice;
        this.props.updateFilterBy(filterBy);
    }

    updateFilters = (filter) => {
        filter.selected = !filter.selected;        
        let filterBy = { ...this.props.filterBy };
        const isFound = filterBy.filters.some(currFilter => currFilter.name === filter.name);
        if (isFound) {
            filterBy.filters = filterBy.filters.filter(currFilter => currFilter.name !== filter.name);
        } else {
            filterBy.filters.push(filter);
        }
        console.log(filterBy);
        
        this.props.updateFilterBy(filterBy);

        // filter.selected = !filter.selected;        
        // this.props.filters.forEach(currFilter => 
        // currFilter.values.map(value=>value._id === value._id ? filter : value));
        // this.props.updateSearchFilters(this.props.filters,filter);
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
    updateFilterBy,
    // updateSearchFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);