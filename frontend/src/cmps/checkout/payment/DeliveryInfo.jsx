import React from 'react'

export default function DeliveryInfo({ form }) {

    if (!form.input) return null;
    const { fullName, city, street, number, apartment, postal, phone, email, mailbox, notes } = form.input;
    return (
        <div className="delivery-info">
            <h2>פרטי המשלוח</h2>
            <div className="name">{fullName}</div>
            <div className="phone">{phone}</div>
            <div className="email">{email}</div>
            <div className="address">
                <div>{`${street} ${number}, ${city}`}</div>
                {!apartment || <div>דירה: {apartment}</div>}
                {!mailbox || <div>ת.ד: {mailbox}</div>}
                <div>מיקוד: {postal}</div>
            </div>
            {!notes || <div className="notes">הערות: {notes}</div>}
        </div>
    )
}
