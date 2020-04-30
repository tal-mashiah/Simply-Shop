import React, { Component } from 'react';
import categoryService from '../../services/categoryService';
import storageService from '../../services/storageService';

import { connect } from 'react-redux';
import { setBag, deleteItem, updateQuantity } from '../../actions/checkoutActions';

import NavBar from './NavBar.jsx'
import Logo from './Logo.jsx';
import Hamburger from './Hamburger.jsx';
import Spinner from '../../cmps/general/Spinner.jsx';
import SearchBar from './SearchBar.jsx';

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
        console.log(itemId, diff);
        this.props.updateQuantity(itemId, diff, quantity);
    }

    render() {
        const { categories } = this.state;
        const { bag } = this.props;
        if (!categories) return <Spinner />

        return (
            <header className="flex justify-between align-center">
                <Logo />
                <SearchBar />
                <NavBar categories={categories} bag={bag} deleteItem={this.deleteItem} changeQuantity={this.changeQuantity} />
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
    setBag,
    deleteItem,
    updateQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);