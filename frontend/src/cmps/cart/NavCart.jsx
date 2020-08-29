import React from 'react';
import { Link } from 'react-router-dom';

import CartModal from './CartModal.jsx';

export default function NavCart({ bag, isItemAdded, deleteItem, changeQuantity }) {

    const renderQuantity = () => {
        return bag.reduce((acc, item) => acc + item.quantity, 0)
    }

    return (
        <div className='link-container'>
            <div className='nav-cart'>
                <Link to="/checkout"> <i className="fas fa-shopping-cart"></i></Link>
                <span className='cart-quantity'> {renderQuantity()} </span>
                <CartModal bag={bag} isItemAdded={isItemAdded} deleteItem={deleteItem} changeQuantity={changeQuantity} />
            </div>
        </div >
    )
}
