import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
    state = { term: '' }

    handleChange = (ev) => {
        this.setState({ term: ev.target.value })
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        const {term} = this.state;
        if(!term) return;
        this.props.history.push(`/search/${term}`)
        this.setState({ term: '' });
    }

    render() {
        return (
            <div className='search-bar'>
                <form onSubmit={this.onSubmit}>
                    <div className="input-container">
                        <input type="text" onChange={this.handleChange} value={this.state.term} placeholder="חפש..." />
                        <i className="fas fa-search" onClick={this.onSubmit}></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);