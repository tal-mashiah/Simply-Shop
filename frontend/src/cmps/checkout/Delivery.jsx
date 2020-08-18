import React, {useState, useEffect} from 'react';
import SelectBox from '../general/SelectBox.jsx';

export default function Delivery({ onDeliverySelected, bag, delivery }) {

    const [options] = useState([
        { value: 'דואר רשום', price: 0 },
        { value: 'דואר שליחים', price: 49 },
        { value: 'איסוף עצמי', price: 0 }
    ])

    useEffect(() => {
        onDeliverySelected(options[0]);
    }, [])

    const rendertotalSum = () => {
        return bag.reduce((acc, item) => acc + (item.product.price * item.quantity), delivery.price)
    }

    if (!delivery) return null;
    return (
        <div className="delivery">
            <h1>סוג המשלוח</h1>
            <div className="info-container flex justify-between align-center">
                <SelectBox handleChange={onDeliverySelected} options={options} />
                <div className="delivery-price">
                    עלות משלוח: {delivery.price > 0 ? delivery.price : ' חינם!'}
                    {delivery.price > 0 ? <i className="fas fa-shekel-sign"></i> : null}
                </div>
                <div className="total-price">סה"כ כולל משלוח: {rendertotalSum()}<i className="fas fa-shekel-sign"></i></div>
            </div>
        </div>
    )
}
