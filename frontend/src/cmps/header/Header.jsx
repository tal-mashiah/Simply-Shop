import React, { useEffect, useState } from 'react';
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

function Header({ setBag, bag, loadCategories, categories, deleteItem, updateQuantity, loggedInUser, logout, isItemAdded }) {

    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)

    useEffect(() => {
        const loadStorageBag = () => {
            const storageBag = storageService.loadFromStorage('bag');
            if (storageBag && storageBag.length) setBag(storageBag);
        }
        loadStorageBag();
        loadCategories();
    }, [loadCategories,setBag])


    useEffect(() => {
        const storageBag = bag.map(item => { return { productId: item.product._id, quantity: item.quantity } });
        storageService.saveToStorage('bag', storageBag);
    }, [bag])

    const toggleSearchBar = () => {
        setIsSearchBarOpen(isSearchBarOpen => !isSearchBarOpen);
    }

    const toggleBurgerModal = () => {
        setIsBurgerOpen(isBurgerOpen => !isBurgerOpen);
        setIsSearchBarOpen(false);
    }

    const onDeleteItem = (itemId) => {
        deleteItem(itemId);
    }

    const changeQuantity = (diff, itemId, quantity) => {
        updateQuantity(itemId, diff, quantity);
    }

    const onLogout = (currRoute) => {
        logout(currRoute)
    }

    if (!categories) return null;
    return (
        <header className={isBurgerOpen ? "menu-open" : ''}>
            <div className={`top-header flex justify-between align-center ${isSearchBarOpen && 'query-open'}`}>
                <Logo />
                <div className="right-container flex justify-center align-center">
                    <Hamburger toggleBurgerModal={toggleBurgerModal} />
                    <SearchBar toggleSearchBar={toggleSearchBar} isSearchBarOpen={isSearchBarOpen} />
                </div>
                <NavBar bag={bag} loggedInUser={loggedInUser} isItemAdded={isItemAdded} logout={onLogout} deleteItem={onDeleteItem} changeQuantity={changeQuantity} />
            </div>
            <CategoryList categories={categories} isBurgerOpen={isBurgerOpen} toggleBurgerModal={toggleBurgerModal} />
            <div className="screen" onClick={toggleBurgerModal}></div>
        </header>
    )

}

const mapStateToProps = state => {
    return {
        bag: state.checkout.bag,
        isItemAdded: state.checkout.isItemAdded,
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