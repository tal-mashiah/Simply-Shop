import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { loadSearchData, updateFilterBy, updateSortBy } from '../actions/searchActions';
import { toggleCompareProduct } from '../actions/compareAction';

import ProductList from '../cmps/product/ProductList.jsx';
import FilterList from '../cmps/filter/FilterList.jsx';
import SearchHeader from '../cmps/search/SearchHeader';

function SearchPage({ products, filters, priceFilter, filterBy, updateFilterBy, updateSortBy, loadSearchData, match, categories, toggleCompareProduct }) {

    const [categoryName, setCategoryName] = useState(null);
    const [isFiltersShown, setIsFiltersShown] = useState(false);

    const onloadSearchData = () => {
        const { term, _id } = match.params;
        if (term) {
            filterBy.searchValue = term;
            filterBy.categoryId = null;
        }
        if (_id) {
            filterBy.categoryId = _id;
            filterBy.searchValue = null;
        }
        updateFilterBy(filterBy);
        loadSearchData(filterBy);
    }

    useEffect(() => {
        onloadSearchData();
    }, [filterBy])

    useEffect(() => {
        filterBy.priceFilter = { max: null, min: null };
        filterBy.filters = [];
        onloadSearchData();
    }, [match.params._id])

    useEffect(() => {
        const getCategoryName = (categoryid) => {
            const currCategory = categories.find(category => category._id === categoryid);
            setCategoryName(currCategory.name)
        }
        if (match.params._id && categories.length) {
            getCategoryName(match.params._id);
        }

    }, [match.params._id, categories])


    const updatePrice = (updatedPrice) => {
        const currFilterBy = { ...filterBy };
        currFilterBy.priceFilter = updatedPrice;
        updateFilterBy(currFilterBy);
    }

    const updateFilters = (filter) => {
        const currFilterBy = { ...filterBy };
        const isFound = currFilterBy.filters.some(currFilter => currFilter.name === filter.name);
        if (isFound) {
            currFilterBy.filters = filterBy.filters.filter(currFilter => currFilter.name !== filter.name);
        } else {
            currFilterBy.filters.push(filter);
        }
        updateFilterBy(currFilterBy);
    }

    const updateSort = (option) => {
        updateSortBy(option.key);
    }

    const toggleFilters = () => {
        setIsFiltersShown(isFiltersShown => !isFiltersShown)
    }

    const onToggleCompareProduct = (product) => {
        toggleCompareProduct(product);
    }

    const { term } = match.params;
    if (!products) return null;
    return (
        <div className={`search-page flex ${isFiltersShown ? 'menu-open' : ''}`}>
            <FilterList
                filters={filters}
                priceFilter={priceFilter}
                isFiltersShown={isFiltersShown}
                productsLength={products.length}
                updatePrice={updatePrice}
                updateFilters={updateFilters}
                toggleFilters={toggleFilters}
            />
            <div className="screen" onClick={toggleFilters}></div>

            <div className="search-container">
                <SearchHeader term={term || categoryName} productsLength={products.length} updateSort={updateSort} toggleFilters={toggleFilters} />
                <ProductList products={products} toggleCompareProduct={onToggleCompareProduct} />
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        products: state.search.searchData.products,
        filters: state.search.searchData.filters,
        priceFilter: state.search.searchData.priceFilter,
        filterBy: state.search.filterBy,
        categories: state.category.categories
    };
};

const mapDispatchToProps = {
    toggleCompareProduct,
    loadSearchData,
    updateFilterBy,
    updateSortBy
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);