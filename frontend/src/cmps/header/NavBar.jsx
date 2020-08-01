import React from 'react';
import { Link } from 'react-router-dom';

import NavCart from '../cart/NavCart.jsx';
import NavUser from '../user/NavUser.jsx';

export default function NavBar({ bag, loggedInUser, deleteItem, changeQuantity, logout }) {
    return (
        <nav className='flex'>
            <div className='link-container contact'>
                <Link to="/contact"><i className="fas fa-phone"></i></Link>
            </div>

            <NavUser loggedInUser={loggedInUser} logout={logout} />
            <NavCart bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity} />
        </nav>
    )
}
