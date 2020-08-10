import React, { useState } from 'react';
import Form from '../general/Form.jsx'

export default function ContactForm({ sendForm }) {

    const [state, setState] = useState({
        inputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', autoComplete: 'name', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['phone'] },
            { type: 'text', name: 'email', label: 'אימייל', autoComplete: 'email', validation: ['required', 'email'] },
            { type: 'textarea', name: 'content', label: 'תוכן', validation: ['required'] }
        ],
        isFormValid: false,
        clearForm: false,
        form: null
    })

    const updateForm = (isFormValid, form) => {
        setState({ ...state, isFormValid, form })
    }

    const onSendForm = () => {
        if (state.isFormValid) {
            sendForm(state.form)
            setState(prevState => ({
                ...state,
                isFormValid:false,
                clearForm: !prevState.clearForm
            }));
        }
    }

    return (
        <div className="contact-form">
            <h1>צור קשר</h1>
            <Form inputs={state.inputs} updateForm={updateForm} clearForm={state.clearForm} />
            <button onClick={onSendForm} className={state.isFormValid ? "main-btn primary" : "main-btn primary disabled"}>שלח</button>
        </div>
    )

}
