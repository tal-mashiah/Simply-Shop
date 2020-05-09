import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        form: {
            fullName: {},
            phone: {},
            email: {}
        },
        regex: {
            fullName: /^[a-zA-Z\u0590-\u05fe\s"'-]{2,}$/,
            phone: /^05\d([-.]{0,1})\d{3}([-.]{0,1})\d{4}$/,
            email: /^\S+@\S+\.\S+$/
        },
        errors: {
            required: 'שדה זה הוא חובה',
            fullName: { oneWord: 'חובה להכניס גם שם משפחה וגם שם פרטי', min2Char: 'הכנס שם עם לפחות 2 אותיות', inValid: 'שם אינו תקין' },
            phone: { inValid: 'מספר טלפון אינו תקין' },
            email: { inValid: 'כתובת מייל אינה תקינה' }
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.validate(value, name);
    }

    validate = (value, name) => {
        const { regex, form, errors } = this.state;
        const formType = form[name];

        formType.value = value;
        if (!value.length) {
            formType.error = errors.required;
        }
        else if (regex[name].test(value)) {
            formType.error = '';
            formType.isValid = true;
        }
        else {
            formType.error = errors[name].inValid;
        }
        if (name === 'fullName') {
            if (value.split(' ').length === 1) {
                formType.error = errors[name].oneWord;
            }
            if (value.length < 2) {
                formType.error = errors[name].min2Char;
            }
        }

        this.setState({ form: { ...this.state.form, [name]: formType } });
    }

    render() {
        const { fullName, phone, email } = this.state.form;

        return (
            <form>
                <label htmlFor="fullName">שם מלא:</label>
                <input type="text" onChange={this.handleChange} id="fullName" name="fullName" placeholder="טל משיח" maxLength="30"></input>
                <div className="form-error">{!fullName || fullName.error}</div>

                <label htmlFor="phone">טלפון נייד:</label>
                <input type="tel" onChange={this.handleChange} id="phone" name="phone" placeholder="050-123-4567"></input>
                <div className="form-error">{!phone || phone.error}</div>

                <label htmlFor="email">אימייל:</label>
                <input type="text" onChange={this.handleChange} id="email" name="email" placeholder="example@google.com"></input>
                <div className="form-error">{!email || email.error}</div>
            </form>
        )
    }
}