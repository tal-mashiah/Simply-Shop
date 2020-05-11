import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        form: {
            fullName: {},
            phone: {},
            email: {},
            city: {},
            street: {},
            number: {},
            apartment: {},
            postal: {},
            mailbox: {},
            notes: {}
        },
        regex: {
            required: /(.|\s)*\S(.|\s)*/,
            langAndMin2Char: /^[a-zA-Z\u0590-\u05fe\s"'-]{2,}$/,
            twoWords: /^([a-zA-Z\u0590-\u05fe]{2,40} +[a-zA-Z\u0590-\u05fe]{2,40})$/,
            phone: /^05\d([-.]{0,1})\d{3}([-.]{0,1})\d{4}$/,
            // eslint-disable-next-line
            email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        },
        errors: {
            required: 'שדה זה הוא חובה',
            langAndMin2Char: 'חובה להזין שתי אותיות ומעלה בעברית או באנגלית',
            twoWords: 'חובה להזין שם פרטי ושם משפחה',
            phone: 'מספר טלפון אינו תקין',
            email: 'כתובת מייל אינה תקינה',
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { form } = this.state;
        const currInput = form[name];
        currInput.value = value;
        const validationAttr = event.target.getAttribute("validation");
        if (validationAttr) {
            const validations = validationAttr.split(' ');
            for (const validation of validations) {
                this.validate(validation, currInput);
                if (!currInput.isValid) break;
            }
        } else {
            currInput.isValid = true;
        }
        this.setState({ form: { ...form, [name]: currInput } });
    }

    validate = (validation, currInput) => {

        const { regex, errors } = this.state;
        if (!regex[validation].test(currInput.value)) {
            currInput.error = errors[validation];
            currInput.isValid = false;
        } else {
            currInput.error = '';
            currInput.isValid = true;
        }
    }

    render() {
        const { inputs } = this.props;
        return (
            <form>
                {inputs.map((input, idx) => {
                    const ConditionalInput = input.type === 'textarea' ? 'textarea' : 'input';
                    const inputName = this.state.form[input.name];
                    return <div key={idx} className={inputName.error ? "input-container error" : inputName.isValid ? "input-container valid" : "input-container"}>
                        <label htmlFor={input.name}>{input.value} {input.validation ? <i className="fas fa-star-of-life"></i> : null}</label>
                        <ConditionalInput type={input.type} onChange={this.handleChange} id={input.name} name={input.name} placeholder={input.value} validation={input.validation}></ConditionalInput>
                        <div className="form-error">{!inputName || inputName.error}
                            <div className="arrow-up"></div>
                        </div>
                        <i className="fas fa-times-circle"></i>
                        <i className="fas fa-check-circle"></i>
                    </div>
                })}
            </form >
        )
    }
}