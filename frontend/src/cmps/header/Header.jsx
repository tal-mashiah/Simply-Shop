import React, { Component } from 'react';
import categoryService from '../../services/categoryService';
import storageService from '../../services/storageService';

import { connect } from 'react-redux';
import { setBag, deleteItem, updateQuantity } from '../../actions/checkoutActions';
import { logout } from '../../actions/UserActions';

import NavBar from './NavBar.jsx'
import Logo from './Logo.jsx';
import Hamburger from './Hamburger.jsx';
import Spinner from '../../cmps/general/Spinner.jsx';
import SearchBar from './SearchBar.jsx';
import CategoryList from '../category/CategoryList.jsx';

class Header extends Component {
    state = { categories: [] }

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

    loadCategories = async () => {
        const categories = await categoryService.query();
        this.setState({ categories })
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

    logout = () => {
        this.props.logout()
    }

    render() {
        const { categories } = this.state;
        const { bag, loggedInUser } = this.props;
        if (!categories) return <Spinner />

        return (
            <header >
                <div className="top-header flex justify-between align-center">
                    <Logo />
                    <SearchBar />
                    <NavBar categories={categories} bag={bag} loggedInUser={loggedInUser} logout={this.logout} deleteItem={this.deleteItem} changeQuantity={this.changeQuantity} />
                </div>
                <CategoryList categories={categories} />
                <Hamburger />
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        bag: state.checkout.bag,
        loggedInUser: state.user.loggedInUser
    };
};

const mapDispatchToProps = {
    logout,
    setBag,
    deleteItem,
    updateQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);