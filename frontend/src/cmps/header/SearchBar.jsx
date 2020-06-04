import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
    state = { term: '' };
    searchInputRef = React.createRef();

    handleChange = (ev) => {
        this.setState({ term: ev.target.value })
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
        return (
            <div className='search-bar flex align-center'>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref={this.searchInputRef} className="search-input" onBlur={this.onInputBlur} onChange={this.handleChange} value={this.state.term} placeholder="חפש..." />
                    <i className="fas fa-search" onClick={this.onSubmit}></i>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);