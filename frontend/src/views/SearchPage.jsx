import React, { Component } from 'react'

import { connect } from 'react-redux';
import { loadSearchData, updateFilterBy } from '../actions/searchActions';

import ProductList from '../cmps/product/ProductList.jsx';
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
        filterBy.filters = [];
        filterBy.priceFilter = { max: null, min: null };
        updateFilterBy(filterBy);
        loadSearchData(filterBy);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.term !== this.props.match.params.term) {
            this.loadSearchData();
        }
    }

    render() {
        const { products} = this.props;        
        if (!products) return <Spinner />
        return (
            <div>
                <ProductList products={products}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.search.searchData.products,
        filterBy: state.search.filterBy
    };
};

const mapDispatchToProps = {
    loadSearchData,
    updateFilterBy
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);