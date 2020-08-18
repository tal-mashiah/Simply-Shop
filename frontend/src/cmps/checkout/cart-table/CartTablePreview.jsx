import React from 'react';
import { Link } from 'react-router-dom';

import QuntityBar from '../../general/QuntityBar.jsx';

export default function CartTablePreview({ changeQuantity, deleteItem, item }) {

    const onDeleteItem = () => {
        deleteItem(item.product._id);
    }

    const { _id, title, price, imagesUrl } = item.product;
    return (
        <div className="cart-table-preview flex align-center justify-between">
            <div className="col-2 flex align-center">
                <Link to={`/product/${_id}`}><img src={imagesUrl[0].thumbnail} alt="product img" /></Link>
                <div className="title"><Link to={`/product/${_id}`}>{title}</Link></div>
            </div>
            <div className="col-3 price">{price}<i className="fas fa-shekel-sign"></i></div>
            <div className="col-4"><QuntityBar quantity={item.quantity} changeQuantity={changeQuantity} itemId={_id} /></div>
            <div className="col-5 price">{price * item.quantity}<i className="fas fa-shekel-sign"></i></div>
            <div className="col-6"><i className="fas fa-trash-alt" onClick={onDeleteItem}></i></div>
        </div>
    )
}
