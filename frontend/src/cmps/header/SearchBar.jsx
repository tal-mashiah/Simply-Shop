import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import searchService from '../../services/searchService';

class SearchBar extends Component {
    state = {
        term: '',
        products: null
    };
    searchInputRef = React.createRef();

    handleChange = (ev) => {
        this.setState({ term: ev.target.value }, async () => {
            if (!this.state.term) return;
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
        this.props.toggleSearchBar();
    }

    render() {
        console.log('products: ', this.state.products);
        return (
            <div className='search-bar flex align-center'>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref={this.searchInputRef} className="search-input" onBlur={this.onInputBlur} onChange={this.handleChange} value={this.state.term} placeholder="חפש..." />
                    <i className="fas fa-search" onClick={this.onSubmit}></i>
                </form>
                <div className="dropdown-menu"></div>
            </div>
        )
    }
}

export default withRouter(SearchBar);