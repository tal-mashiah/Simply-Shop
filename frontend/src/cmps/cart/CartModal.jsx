import React from 'react';
import CartItemList from './CartItemList.jsx';
import { Link } from 'react-router-dom';

export default function CartModal({ bag, isItemAdded, deleteItem, changeQuantity }) {

    const renderBagSum = () => {
        return bag.reduce((acc, item) => acc + ((item.product.salePrice || item.product.price) * item.quantity), 0)
    }

    const ConditionalLink = bag.length > 0 ? Link : 'div';

    return (
        <div className={`modal ${isItemAdded ? 'item-added' : ''}`}>
            <CartItemList bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity} />
            {bag.length > 0 ||
                <div className="cart-modal-empty">
                    עגלת הקניות שלך ריקה
                </div>}
            <div className="cart-modal-total flex justify-between align-center">
                <ConditionalLink to="/checkout">
                    <button className={bag.length > 0 ? "main-btn primary" : "main-btn primary disabled"}>בצע הזמנה</button>
                </ConditionalLink>
                <div>
                    <span>סה"כ:</span>
                    <span>{renderBagSum()}<i className="fas fa-shekel-sign"></i></span>
                </div>
            </div>
        </div>
    )
}
