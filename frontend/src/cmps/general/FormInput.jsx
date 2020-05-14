import React, { Component } from 'react'

export default class FormInput extends Component {
    render() {
        const ConditionalInput = input.type === 'textarea' ? 'textarea' : 'input';
        return (
            <div key={idx} className={input.error ? "input-container error" : input.isValid && input.value ? "input-container valid" : "input-container"}>
                <label htmlFor={input.name}>{input.label} {input.validation ? <i className="fas fa-star-of-life"></i> : null}</label>
                <ConditionalInput type={input.type} onChange={this.handleChange} id={input.name} name={input.name} placeholder={input.label}></ConditionalInput>
                <div className="form-error">{!input || input.error}
                    <div className="arrow-up"></div>
                </div>
                {input.toggleVisibility ? <i class="far fa-eye-slash"></i> : null}
                <i className="fas fa-times-circle"></i>
                <i className="fas fa-check-circle"></i>
            </div>
        )
    }
}
