import React, { useEffect, useState } from 'react';
import Form from '../general/Form.jsx';
import { Link } from 'react-router-dom';

export default function OrderForm({ user, logout, updateForm }) {

    const [updatedInputs, setUpdatedInputs] = useState(null);
    const [inputs] = useState([
        { type: 'text', name: 'email', label: 'אימייל', validation: ['required', 'email'] },
        { type: 'text', name: 'fullName', label: 'שם מלא', validation: ['required', 'langAndMin2Char', 'twoWords'] },
        { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['required', 'phone'] },
        { type: 'text', name: 'city', label: 'עיר / יישוב', validation: ['required', 'langAndMin2Char'] },
        { type: 'text', name: 'street', label: 'רחוב', validation: ['required'] },
        { type: 'number', name: 'number', label: 'מספר בית', validation: ['required'] },
        { type: 'number', name: 'apartment', label: 'דירה' },
        { type: 'text', name: 'postal', label: 'מיקוד', validation: ['required'] },
        { type: 'text', name: 'mailbox', label: 'ת.ד' },
        { type: 'textarea', name: 'notes', label: 'הערות' }
    ]);

    useEffect(() => {
        if (user) {
            const userInputs = inputs.map(input => {
                let inputCopy = { ...input };
                for (let [key, value] of Object.entries(user)) {
                    if (inputCopy.name === key) {
                        inputCopy.value = value;
                    }
                    if (inputCopy.name === 'email') {
                        delete inputCopy.validation;
                        inputCopy.disabled = true;
                    }
                }
                return inputCopy;
            })
            setUpdatedInputs(userInputs);
        } else {
            setUpdatedInputs(inputs);
        }
    }, [user])

    const onLogOut = () => {
        logout(window.location.href);
        updateForm(false, null);
    }


    if (!updatedInputs) return null;
    return (
        <div className="order-form">
            <h1>פרטי הזמנה</h1>
            {user ? <div className="checkout-auth">{`לא ${user.fullName}?`} <span onClick={onLogOut}>התנתק</span></div> :
                <div className="checkout-auth">לקוח/ה רשום? <Link to={{ pathname: 'auth/login', lastRoute: window.location.hash }}>התחבר/י עכשיו</Link></div>}
            <Form inputs={updatedInputs} updateForm={updateForm} />
        </div>
    )
}
