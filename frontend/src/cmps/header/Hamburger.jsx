import React, { Component } from 'react'

export default class Hamburger extends Component {

    onToggleMenu = () => {
        document.querySelector('nav').classList.toggle('open');
        document.querySelector('header').classList.toggle('menu-open');
    }

    render() {
        return (
            <button className="nav-hamburger" onClick={this.onToggleMenu}>
                <span></span><span></span><span></span>
            </button>
        )
    }
}