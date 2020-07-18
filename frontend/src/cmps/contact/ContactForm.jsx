import React, { Component } from 'react';
import Form from '../general/Form.jsx'

export default class ContactForm extends Component {

    state = {
        inputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', autoComplete: 'name', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['phone'] },
            { type: 'text', name: 'email', label: 'אימייל', autoComplete: 'email', validation: ['required', 'email'] },
            { type: 'textarea', name: 'content', label: 'תוכן', validation: ['required'] }
        ],
        isFormValid: false,
        clearForm: false,
        form: null
    }

    updateForm = (isFormValid, form) => {
        this.setState({ isFormValid, form })
    }

    onSendForm = () => {
        const { isFormValid, form } = this.state;
        if (isFormValid) {
            this.props.sendForm(form)
            this.setState(prevState => ({
                clearForm: !prevState.clearForm
            }));
        }
    }

    render() {
        const { inputs, isFormValid, clearForm } = this.state;
        return (
            <div className="contact-form">
                <h1>צור קשר</h1>
                <Form inputs={inputs} updateForm={this.updateForm} clearForm={clearForm} />
                <button onClick={this.onSendForm} className={isFormValid ? "main-btn primary" : "main-btn primary disabled"}>שלח</button>
            </div>
        )
    }
}
