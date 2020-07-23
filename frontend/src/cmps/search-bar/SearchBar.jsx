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

    onScreenClicked = () => {
        this.state.isModalShown && this.setState({ isModalShown: false });
    }

    onProductClick = () => {
        this.state.isModalShown && this.setState({ isModalShown: false, term: '', products: [] });
    }

    onInputBlur = () => {
        this.props.toggleSearchBar();
    }

    onInputClick = () => {
        this.state.isModalShown || this.setState({ isModalShown: true });
    }

    render() {
        const { products, term, isModalShown } = this.state;
        return (
            <div className='search-bar flex align-center'>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref={this.searchInputRef} className="search-input" onBlur={this.onInputBlur} onClick={this.onInputClick} onChange={this.handleChange} value={term} placeholder="חפש..." />
                    <i className="fas fa-search" onClick={this.onSubmit}></i>
                </form>
                {products.length && isModalShown ? <SearchProductList products={products} onProductClick={this.onProductClick} /> : null}
                {products.length && isModalShown ? <div className="search-bar-screen" onClick={this.onScreenClicked}></div> : null}
            </div>
        )
    }
}

export default withRouter(SearchBar);