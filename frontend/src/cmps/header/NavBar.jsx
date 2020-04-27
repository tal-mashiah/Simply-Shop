import React from 'react'
import CategoryNav from '../category/CategoryNav.jsx';
import Cart from '../cart/Cart.jsx';

export default function NavBar({ categories, bag, deleteItem, changeQuantity }) {
    return (
        <nav className='flex'>
            <CategoryNav categories={categories} />
            <Cart bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity}/>
        </nav>
    )
}
