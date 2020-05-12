import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        form: null,
        allValid: false,
        regex: {
            required: /(.|\s)*\S(.|\s)*/,
            langAndMin2Char: /^[a-zA-Z\u0590-\u05fe\s"'-]{2,}$/,
            twoWords: /^([a-zA-Z\u0590-\u05fe]{2,40} +[a-zA-Z\u0590-\u05fe]{2,40})$/,
            phone: /^05\d([-.]{0,1})\d{3}([-.]{0,1})\d{4}$/,
            // eslint-disable-next-line
            email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        },
        errors: {
            required: 'שדה זה הוא חובה',
            langAndMin2Char: 'חובה להזין שתי אותיות ומעלה בעברית או באנגלית',
            twoWords: 'חובה להזין שם פרטי ושם משפחה',
            phone: 'מספר טלפון אינו תקין',
            email: 'כתובת מייל אינה תקינה'
        }
    }

    componentDidMount() {
        this.props.inputs.forEach(input => {
            input.isValid = input.validation ? false : true;
        });
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        const { form } = this.state;
        const currInput = this.props.inputs.find(item => item.name === name);
        currInput.value = value;

        if (currInput.validation) {
            for (const validation of currInput.validation) {
                this.validate(validation, currInput);
                if (!currInput.isValid) break;
            }
        } else {
            currInput.isValid = true;
        }

        this.setState({ form: { ...form, [name]: currInput.value} });
        this.checkIfFormValid();
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

    checkIfFormValid = () => {
        const isValid = this.props.inputs.every(input => input.isValid === true);
        if (isValid) {
            this.setState(prevState => ({ allValid: !prevState.allValid }));
            this.props.updateForm(isValid, this.state.form)
        } else if (this.state.allValid) {
            this.setState(prevState => ({ allValid: !prevState.allValid }));
            this.props.updateForm(isValid, this.state.form)
        }
    }

    render() {
        const { inputs } = this.props;
        console.log(inputs);

        return (
            <form>
                {inputs.map((input, idx) => {
                    const ConditionalInput = input.type === 'textarea' ? 'textarea' : 'input';

                    return <div key={idx} className={input.error ? "input-container error" : input.isValid && input.value ? "input-container valid" : "input-container"}>
                        <label htmlFor={input.name}>{input.label} {input.validation ? <i className="fas fa-star-of-life"></i> : null}</label>
                        <ConditionalInput type={input.type} onChange={this.handleChange} id={input.name} name={input.name} placeholder={input.label}></ConditionalInput>
                        <div className="form-error">{!input || input.error}
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