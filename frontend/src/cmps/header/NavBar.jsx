import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom';
import CategoryList from '../category/CategoryList.jsx';

export default class NavBar extends Component {
    state = { isCategoriesShown: false }

    toggleCategories = () => {
        this.setState(prevState => ({
            isCategoriesShown: !prevState.isCategoriesShown
        }));
    }

    render() {
        const {categories} = this.props;
        return (
            <nav className='flex'>
                <div className='link-container' onClick={this.toggleCategories}>
                    {/* <NavLink activeClassName="active" to='/category'>home</NavLink> */}
                    <h3>Categories</h3>
                </div>
                {this.state.isCategoriesShown ?
                <CategoryList categories={categories} toggleCategories={this.toggleCategories}/> : null}
            </nav>
        )
    }
}
