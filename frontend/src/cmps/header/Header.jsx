import React, { Component } from 'react';
import storageService from '../../services/storageService';

import { connect } from 'react-redux';
import { setBag, deleteItem, updateQuantity } from '../../actions/checkoutActions';
import { loadCategories } from '../../actions/categoryAction';
import { logout } from '../../actions/UserActions';

import NavBar from './NavBar.jsx'
import Logo from './Logo.jsx';
import Hamburger from './Hamburger.jsx';
import CategoryList from '../category/CategoryList.jsx';
import SearchBar from '../search-bar/SearchBar.jsx';

class Header extends Component {
    state = { isSearchBarOpen: false, isBurgerOpen: false }

    componentDidMount() {
        this.loadCategories();
        this.loadStorageBag();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.bag !== this.props.bag) {
            const storageBag = this.props.bag.map(item => { return { productId: item.product._id, quantity: item.quantity } });
            storageService.saveToStorage('bag', storageBag);
        }
    }

    toggleSearchBar = () => {
        this.setState(prevState => ({
            isSearchBarOpen: !prevState.isSearchBarOpen
        }));
    }

    toggleBurgerModal = () => {
        this.setState(prevState => ({
            isBurgerOpen: !prevState.isBurgerOpen,
            isSearchBarOpen: false
        }));
    }

    loadCategories = () => {
        this.props.loadCategories();
    }

    loadStorageBag = () => {
        const storageBag = storageService.loadFromStorage('bag');
        if (storageBag && storageBag.length > 0) this.props.setBag(storageBag);
    }

    deleteItem = (itemId) => {
        this.props.deleteItem(itemId);
    }

    changeQuantity = (diff, itemId, quantity) => {
        this.props.updateQuantity(itemId, diff, quantity);
    }

    logout = (currRoute) => {
        this.props.logout(currRoute)
    }

    render() {
        const { isSearchBarOpen, isBurgerOpen } = this.state;
        const { bag, loggedInUser, categories } = this.props;
        if (!categories) return null;

        return (
            <header className={isBurgerOpen ? "menu-open" : ''}>
                <div className={`top-header flex justify-between align-center ${isSearchBarOpen && 'query-open'}`}>
                    <Logo />
                    <div className="right-container flex justify-center align-center">
                        <Hamburger toggleBurgerModal={this.toggleBurgerModal} />
                        <SearchBar toggleSearchBar={this.toggleSearchBar} isSearchBarOpen={isSearchBarOpen} />
                    </div>
                    <NavBar bag={bag} loggedInUser={loggedInUser} logout={this.logout} deleteItem={this.deleteItem} changeQuantity={this.changeQuantity} />
                </div>
                <CategoryList categories={categories} isBurgerOpen={isBurgerOpen} toggleBurgerModal={this.toggleBurgerModal} />
                <div className="screen" onClick={this.toggleBurgerModal}></div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        bag: state.checkout.bag,
        loggedInUser: state.user.loggedInUser,
        categories: state.category.categories
    };
};

const mapDispatchToProps = {
    logout,
    setBag,
    deleteItem,
    updateQuantity,
    loadCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);