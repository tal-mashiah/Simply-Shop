import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CategoryPreview extends Component {

    render() {
        const { name, _id } = this.props.category;
        return (
            <div className="category-preview" onClick={this.props.toggleBurgerModal}>
                <Link to={`/category/${name}/${_id}`}>
                <h3>{name}</h3>
                </Link>
            </div>
        )
    }
}