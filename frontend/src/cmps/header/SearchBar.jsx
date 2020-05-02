import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
    state = { term: '' }

    handleChange = (ev) => {
        this.setState({ term: ev.target.value })
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        this.props.history.push(`/search/${this.state.term}`)
        this.setState({ term: '' });
    }

    render() {
        return (
            <div className='search-bar'>
                <form onSubmit={this.onSubmit}>
                        <input type="text" onChange={this.handleChange} value={this.state.term} placeholder="חפש..."/>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);