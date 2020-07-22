import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import searchService from '../../services/searchService';
import SearchProductList from './SearchProductList';

class SearchBar extends Component {
    state = {
        term: '',
        products: [],
        isModalShown: true
    };
    searchInputRef = React.createRef();

    handleChange = (ev) => {
        this.setState({ term: ev.target.value }, async () => {
            if (!this.state.term) {
                this.setState({ products: [] })
                return;
            }
            const products = await searchService.getByTerm(this.state.term)
            this.setState({ products })
        })
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        this.searchInputRef.current.focus();
        const { term } = this.state;
        const { toggleSearchBar, history } = this.props;
        toggleSearchBar();
        if (!term) return;
        history.push(`/search/${term}`)
        this.setState({ term: '' });
    }

    onInputBlur = () => {
        this.state.isModalShown && this.setState({ isModalShown: false })
        this.props.toggleSearchBar();

    }

    onInputClick = () => {
        this.state.isModalShown || this.setState({ isModalShown: true });
    }

    onProductClick = () => {
        console.log('hello');
    }

    render() {
        const { products, term, isModalShown } = this.state;
        console.log('products: ', products);
        return (
            <div className='search-bar flex align-center'>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref={this.searchInputRef} className="search-input" onBlur={this.onInputBlur} onClick={this.onInputClick} onChange={this.handleChange} value={term} placeholder="חפש..." />
                    <i className="fas fa-search" onClick={this.onSubmit}></i>
                </form>
                {products.length && isModalShown ? <SearchProductList products={products} onProductClick={this.onProductClick} /> : null}
            </div>
        )
    }
}

export default withRouter(SearchBar);