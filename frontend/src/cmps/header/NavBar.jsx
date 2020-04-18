import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {

    render() {
        return (
            <nav className='flex'>
                <div className='link-container'>
                    <NavLink activeClassName="active" to='/category'>Products</NavLink>
                </div>
            </nav>
        )
    }
}
