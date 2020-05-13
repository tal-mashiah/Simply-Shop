import React from 'react'
import NavCart from '../cart/NavCart.jsx';
import NavUser from '../user/NavUser.jsx';

export default function NavBar({ bag, deleteItem, changeQuantity }) {
    return (
        <nav className='flex'>
            <NavUser/>
            <NavCart bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity}/>
        </nav>
    )
}
