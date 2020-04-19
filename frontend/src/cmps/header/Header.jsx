import React, { Component } from 'react';
import categoryService from '../../services/categoryService';

import NavBar from './NavBar.jsx'
import Logo from './Logo.jsx';
import Hamburger from './Hamburger.jsx';
import Spinner from '../../cmps/general/Spinner.jsx';


export default class Header extends Component {
    state = { categories: [] }

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories = async () => {
        const categories = await categoryService.query();
        this.setState({categories})
    }
    
    render() {
        const {categories} = this.state;
        if (!categories) return <Spinner/>
        
        console.log(categories);
        return (
            <header className="flex">
                <Logo />
                <NavBar categories={categories}/>
                <Hamburger />
            </header>
        )
    }
}
