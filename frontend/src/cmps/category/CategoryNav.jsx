import React, { Component } from 'react'
import CategoryList from '../category/CategoryList.jsx';

export default class CategoryNav extends Component {
    state = { isCategoriesShown: false }

    toggleCategories = () => {
        this.setState(prevState => ({
            isCategoriesShown: !prevState.isCategoriesShown
        }));
    }

    render() {
        const { categories } = this.props;
        return (
            <div className='link-container' onClick={this.toggleCategories}>
                <h3>Categories</h3>
                {this.state.isCategoriesShown ?
                    <CategoryList categories={categories} toggleCategories={this.toggleCategories} /> : null}
            </div>
        )
    }
}
