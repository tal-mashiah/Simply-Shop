import React, { useState } from 'react';
import Form from '../general/Form.jsx';

const initInputs = [
    { type: 'text', name: 'fullName', label: 'שם מלא', autoComplete: 'name', validation: ['required', 'langAndMin2Char', 'twoWords'] },
    { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['phone'] },
    { type: 'text', name: 'email', label: 'אימייל', autoComplete: 'email', validation: ['required', 'email'] },
    { type: 'textarea', name: 'content', label: 'תוכן', validation: ['required'] }
];

export default function ContactForm({ sendForm }) {

    const [inputs] = useState(initInputs);
    const [isFormValid, setIsFormValid] = useState(false);
    const [clearForm, setClearForm] = useState(false);
    const [form, setForm] = useState(null);

    const updateForm = (isFormValid, form) => {
        setIsFormValid(isFormValid);
        setForm(form);
    }

    const onSendForm = () => {
        if (isFormValid) {
            sendForm(form);
            setIsFormValid(false);
            setClearForm(clearForm => !clearForm);
        }
    }

    return (
        <div className="contact-form">
            <h1>צור קשר</h1>
            <Form inputs={inputs} updateForm={updateForm} clearForm={clearForm} />
            <button onClick={onSendForm} className={isFormValid ? "main-btn primary" : "main-btn primary disabled"}>שלח</button>
        </div>
    )

}
