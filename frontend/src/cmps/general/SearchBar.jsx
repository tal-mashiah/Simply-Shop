import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term: '' }

    handleChange = (ev) => {
        this.setState({ term: ev.target.value })
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        this.props.searchBy(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div className='search-bar'>
                <form onSubmit={this.onSubmit}>
                    <div className="search-title">{`${this.props.searchName} Search`}</div>
                    <input type="text" onChange={this.handleChange} value={this.state.term} />
                </form>
            </div>
        )
    }
}

SearchBar.defaultProps = {
    searchName: '',
}