import React, { Component } from 'react';
import Form from '../general/Form.jsx'

export default class ContactForm extends Component {
    state = {
        inputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', autoComplete: 'name', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'text', name: 'email', label: 'אימייל', autoComplete: 'email', validation: ['required', 'email'] },
            { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['required', 'phone'] },
            { type: 'textarea', name: 'notes', label: 'תוכן', validation: ['required'] }
        ]
    }

    updateForm = (isValid, form) => {
        console.log('isValid: ',isValid);
        console.log('form: ',form);
        
        // this.props.updateForm(isValid, form);
    }

    render() {
        return (
            <div className="contact-form">
                <h1>טופס יצירת קשר</h1>
                <Form inputs={this.state.inputs} updateForm={this.updateForm} />
                <button className="main-btn primary">שלח</button>
            </div>
        )
    }
}
