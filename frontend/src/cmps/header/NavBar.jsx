import React from 'react'
import Cart from '../cart/Cart.jsx';

export default function NavBar({ bag, deleteItem, changeQuantity }) {
    return (
        <nav className='flex'>
            <Cart bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity}/>
        </nav>
    )
}
