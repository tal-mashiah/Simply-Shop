import React from 'react'
import NavCart from '../cart/NavCart.jsx';
import NavUser from '../user/NavUser.jsx';

export default function NavBar({ bag, loggedInUser, deleteItem, changeQuantity, logout }) {
    return (
        <nav className='flex'>
            <NavUser loggedInUser={loggedInUser} logout={logout}/>
            <NavCart bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity} />
        </nav>
    )
}
