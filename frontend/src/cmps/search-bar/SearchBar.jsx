import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { isMobile } from 'mobile-device-detect';

import searchService from '../../services/searchService';
import SearchProductList from './SearchProductList';

class SearchBar extends Component {
    state = {
        term: '',
        products: [],
        isModalShown: false,
        isNoResultShown: false,
    };
    searchInputRef = React.createRef();


    handleChange = (ev) => {
        this.setState({ term: ev.target.value }, async () => {
            if (!this.state.term) {
                this.setState({ products: [] })
                return;
            }
            const products = await searchService.getByTerm(this.state.term)
            this.setState({ products, isNoResultShown: products.length === 0 })
        })
    }

    onSubmit = (ev) => {
        ev.preventDefault();

        const { isSearchBarOpen, toggleSearchBar, history } = this.props;
        const { term } = this.state;

        if (isMobile) {
            this.searchInputRef.current.focus();
            this.openSearchModal();
            isSearchBarOpen || toggleSearchBar();
        }
        if (!term) return;

        this.closeSearchModal();
        history.push(`/search/${term}`)
        this.setState({ term: '' });
    }

    onScreenClicked = () => {
        if (isMobile) {
            this.closeSearchModal();
        } else {
            this.state.isModalShown && this.setState({ isModalShown: false });
            if (!this.state.products.length) this.setState({ term: '' })
        }
    }

    closeSearchModal = () => {
        this.state.isModalShown && this.setState({ isModalShown: false, term: '', products: [] });
        this.searchInputRef.current.blur();
        if (isMobile) {
            this.props.toggleSearchBar();
        }
    }

    openSearchModal = () => {
        this.state.isModalShown || this.setState({ isModalShown: true });
    }

    render() {
        const { products, term, isModalShown, isNoResultShown } = this.state;
        return (
            <div className='search-bar flex align-center'>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref={this.searchInputRef} className="search-input" onClick={this.openSearchModal} onChange={this.handleChange} value={term} placeholder="חפש..." />
                    <i className="fas fa-search" onClick={this.onSubmit}></i>
                </form>
                {products.length && isModalShown ? <SearchProductList products={products} onProductClick={this.closeSearchModal} /> : null}
                {isModalShown && (term || isMobile) ? <div className="search-bar-screen" onClick={this.onScreenClicked}></div> : null}
                {isNoResultShown && isModalShown && term ? <div onClick={this.closeSearchModal} className="search-bar-modal-container no-result">אין תוצאות</div> : null}
            </div>
        )
    }
}

export default withRouter(SearchBar);