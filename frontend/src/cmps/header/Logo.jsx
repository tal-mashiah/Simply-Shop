import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Logo extends Component {
    render() {
        return (
            <div className='main-logo'>
                <NavLink activeClassName="active" to='/' exact>
                    <img src={require(`../../assets/images/${this.props.logo}.png`)} alt="logo" />
                </NavLink>
            </div>
        )
    }
}

Logo.defaultProps = {
    logo: 'simplyshop-header-logo'
}