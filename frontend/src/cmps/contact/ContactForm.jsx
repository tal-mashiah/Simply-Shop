import React, { Component } from 'react';
import Form from '../general/Form.jsx'

export default class ContactForm extends Component {
    state = {
        inputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', autoComplete: 'name', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['phone'] },
            { type: 'text', name: 'email', label: 'אימייל', autoComplete: 'email', validation: ['required', 'email'] },
            { type: 'textarea', name: 'notes', label: 'תוכן', validation: ['required'] }
        ],
        isFormValid: false
    }

    updateForm = (isFormValid, form) => {
        this.setState({ isFormValid })
        console.log('isValid: ', isFormValid);
        console.log('form: ', form);

        // this.props.updateForm(isValid, form);
    }

    render() {
        const { inputs, isFormValid } = this.state;
        return (
            <div className="contact-form">
                <h1>טופס יצירת קשר</h1>
                <Form inputs={inputs} updateForm={this.updateForm} />
                <button className={isFormValid ? "main-btn primary" : "main-btn primary disabled"}>שלח</button>
            </div>
        )
    }
}
