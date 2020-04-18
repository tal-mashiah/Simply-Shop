import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar.jsx'

export default class Header extends Component {

    onToggleMenu = () => {
        document.querySelector('nav').classList.toggle('open');
        document.querySelector('header').classList.toggle('menu-open');
    }

    render() {
        return (
            <header>
                <div className='main-logo'>
                    <NavLink activeClassName="active" to='/' exact>
                        {/* <img src={require('')} alt="logo" /> */}
                    </NavLink>
                </div>

                <button className="nav-hamburger" onClick={this.onToggleMenu}>
                    <span></span><span></span><span></span>
                </button>

                <NavBar />
            </header>
        )
    }
}
