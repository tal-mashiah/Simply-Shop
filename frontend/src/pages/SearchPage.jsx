import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { loadSearchData, updateFilterBy, updateSortBy } from '../actions/searchActions';
import { toggleCompareProduct, deleteComparedProducts } from '../actions/compareAction';
import { setGrowl } from '../actions/GrowlActions';

import ProductList from '../cmps/product/ProductList.jsx';
import FilterList from '../cmps/filter/FilterList.jsx';
import SearchHeader from '../cmps/search/SearchHeader';
import CompareModal from '../cmps/search/CompareModal';

function SearchPage({ products, filters, priceFilter, filterBy, updateFilterBy, updateSortBy, loadSearchData, match, categories, toggleCompareProduct, compareProducts, maxComparedNumber, setGrowl, deleteComparedProducts }) {

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
    }, [match.params._id, match.params.term])

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

    const onToggleComparedProduct = (product) => {
        if (compareProducts.length === maxComparedNumber) {
            const isExist = compareProducts.some(compareProduct => compareProduct._id === product._id);
            if (!isExist) {
                setGrowl(`אפשר להשוות עד ${maxComparedNumber} מוצרים בכל פעם`, 'warning');
                return;
            }
        }
        toggleCompareProduct(product);
    }

    const onDeleteComparedProducts = () => {
        deleteComparedProducts();
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
                <ProductList products={products} toggleComparedProduct={onToggleComparedProduct} compareProducts={compareProducts} />
            </div>

            <CompareModal products={compareProducts} maxComparedNumber={maxComparedNumber} toggleComparedProduct={onToggleComparedProduct} deleteComparedProducts={onDeleteComparedProducts} />
        </div>
    )

}

const mapStateToProps = state => {
    return {
        products: state.search.searchData.products,
        filters: state.search.searchData.filters,
        priceFilter: state.search.searchData.priceFilter,
        filterBy: state.search.filterBy,
        categories: state.category.categories,
        compareProducts: state.compare.compareProducts,
        maxComparedNumber: state.compare.maxComparedNumber
    };
};

const mapDispatchToProps = {
    deleteComparedProducts,
    toggleCompareProduct,
    loadSearchData,
    updateFilterBy,
    updateSortBy,
    setGrowl
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);