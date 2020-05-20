import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        form: null,
        regex: {
            required: /(.|\s)*\S(.|\s)*/,
            langAndMin2Char: /^[a-zA-Z\u0590-\u05fe\s"'-]{2,}$/,
            twoWords: /^([a-zA-Z\u0590-\u05fe]{2,40} +[a-zA-Z\u0590-\u05fe]{2,40})$/,
            phone: /^05\d([-.]{0,1})\d{3}([-.]{0,1})\d{4}$/,
            // eslint-disable-next-line
            email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
            min8Char: /.{6,}/,
            engAndNums: /^[a-zA-Z0-9]*$/,
            passvalid: (currInput) => {
                const contraName = currInput.name === 'passwordValidation' ? 'password' : 'passwordValidation';
                const contraInput = this.props.inputs.find(input => input.name === contraName);
                switch (currInput.name) {

                    case 'passwordValidation':
                        if (contraInput.value === currInput.value) return true;
                        break;

                    case 'password':
                        if (!contraInput.value) return true;

                        if (contraInput.value === currInput.value) {
                            contraInput.isValid = true;
                            contraInput.error = '';
                            return true;

                        } else {
                            contraInput.isValid = false;
                            contraInput.error = 'הסיסמאות אינן תואמות';
                            return true;
                        }
                    default:
                        break;
                }
            }
        },
        errors: {
            required: 'שדה זה הוא חובה',
            langAndMin2Char: 'חובה להזין שתי אותיות ומעלה בעברית או באנגלית',
            twoWords: 'חובה להזין שם פרטי ושם משפחה',
            phone: 'מספר טלפון אינו תקין',
            email: 'כתובת מייל אינה תקינה',
            min8Char: 'חובה להזין מינימום 8 ספרות',
            engAndNums: 'חובה להזין אותיות באנגלית או מספרים בלבד',
            passvalid: 'הסיסמאות אינן תואמות'
        }
    }


    componentDidMount() {
        this.props.inputs.forEach(input => {
            input.isValid = input.validation ? false : true;
            if (input.value) {
                this.handleInput(input.name, input.value);
            }
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.handleInput(name, value);
    }

    handleInput(name, value) {
        const { form } = this.state;
        const currInput = this.props.inputs.find(item => item.name === name);
        currInput.value = value;
        if (!currInput.value && !currInput.validation.includes('required')) {
            currInput.isValid = true;
            currInput.error = '';
        } else if (currInput.validation) {
            for (const validation of currInput.validation) {
                this.validate(validation, currInput);
                if (!currInput.isValid) break;
            }
        } else {
            currInput.isValid = true;
        }
        this.setState({ form: { ...form, [name]: currInput.value } }, () => this.checkIfFormValid());
    }

    validate = (validation, currInput) => {
        const { regex, errors } = this.state;
        if (typeof regex[validation] === 'function') {
            const isValid = regex[validation](currInput);
            if (isValid) {
                currInput.error = '';
                currInput.isValid = true;
            } else {
                currInput.error = errors[validation];
                currInput.isValid = false;
            }

        } else if (!regex[validation].test(currInput.value)) {
            currInput.error = errors[validation];
            currInput.isValid = false;
        } else {
            currInput.error = '';
            currInput.isValid = true;
        }
    }

    checkIfFormValid = () => {
        const isFormValid = this.props.inputs.every(input => input.isValid === true);
        this.props.updateForm(isFormValid, this.state.form);
    }

    togglePassword = (input) => {
        const currInput = this.props.inputs.find(currInput => currInput.name === input.name);
        currInput.type = currInput.type === 'password' ? 'text' : 'password';
        this.setState({ ...this.state })
    }

    render() {
        const { inputs } = this.props;

        return (
            <form>
                {inputs.map((input, idx) => {
                    const ConditionalInput = input.type === 'textarea' ? 'textarea' : 'input';

                    return <div key={idx} className={input.error ? "input-container error" : input.isValid && input.value ? "input-container valid" : "input-container"}>
                        <label htmlFor={input.name}>{input.label} {input.validation.includes('required') ? <i className="fas fa-star-of-life"></i> : null}</label>
                        <ConditionalInput type={input.type} value={input.value || ''} onChange={this.handleChange} id={input.name} name={input.name} placeholder={input.label}></ConditionalInput>
                        <div className="form-error">{!input || input.error}
                            <div className="arrow-up"></div>
                        </div>
                        {input.toggleVisibility ? <i onClick={() => this.togglePassword(input)} className={input.type === 'password' ? "far fa-eye-slash" : "far fa-eye"}></i> : null}
                        <i className="fas fa-exclamation-circle"></i>
                        <i className="fas fa-check-circle"></i>
                    </div>
                })}
            </form >
        )
    }
}