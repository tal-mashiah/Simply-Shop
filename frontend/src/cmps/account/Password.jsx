import React, { Component } from 'react';
import Form from '../general/Form.jsx';

export default class Password extends Component {
    state = {
        isValid: null,
        form: null,
        inputs: [
            { type: 'password', name: 'currPassword', label: 'סיסמה נוכחית', toggleVisibility: true, validation: ['required'] },
            { type: 'password', name: 'password', label: 'סיסמה חדשה', toggleVisibility: true, validation: ['required', 'passvalid', 'min8Char', 'engAndNums'] },
            { type: 'password', name: 'passwordValidation', label: 'אימות סיסמה', toggleVisibility: true, validation: ['required', 'passvalid'] }
        ],
    }

    updateForm = (isValid, form) => {
        this.setState({ isValid, form });
    }

    onUpdatePassword = () => {
        const { isValid, form } = this.state;
        if (isValid) {
            this.props.updatePassword(form);
        }
    }

    render() {
        const { inputs, isValid } = this.state;
        return (
            <div className="flex column align-center">
                <Form inputs={inputs} updateForm={this.updateForm} />
                <button className={isValid ? "main-btn primary" : "main-btn primary disabled"} onClick={this.onUpdatePassword}>עדכון סיסמה</button>
            </div>
        )
    }
}
