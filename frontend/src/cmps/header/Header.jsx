import React, { Component } from 'react';
import categoryService from '../../services/categoryService';

import { connect } from 'react-redux';
import { deleteItem } from '../../actions/checkoutActions';

import NavBar from './NavBar.jsx'
import Logo from './Logo.jsx';
import Hamburger from './Hamburger.jsx';
import Spinner from '../../cmps/general/Spinner.jsx';
import SearchBar from './SearchBar.jsx';


class Header extends Component {
    state = { categories: [] }

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories = async () => {
        const categories = await categoryService.query();
        this.setState({categories})
    }

    deleteItem = (itemId) => {
        this.props.deleteItem(itemId);
    }
    
    render() {
        const {categories} = this.state;
        const {bag} = this.props;
        if (!categories) return <Spinner/>      
          
        return (
            <header className="flex justify-between align-center">
                <Logo />
                <SearchBar/>
                <NavBar categories={categories} bag={bag} deleteItem={this.deleteItem}/>
                <Hamburger />
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        bag: state.checkout.bag
    };
};

const mapDispatchToProps = {
    deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);