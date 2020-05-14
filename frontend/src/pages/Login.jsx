import React, { Component } from 'react';
import Form from '../cmps/general/Form.jsx';

export default class Login extends Component {
    state = {
        inputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'text', name: 'email', label: 'אימייל', validation: ['required', 'email'] },
            { type: 'password', name: 'password', label: 'סיסמה', toggleVisibility: true, validation: ['required', 'passvalid', 'min8Char', 'engAndNums'] },
            { type: 'password', name: 'password-validation', label: 'אימות סיסמה', toggleVisibility: true, validation: ['required', 'passvalid'] }
        ]
    }

    updateForm = (isValid, form) => {

    }

    render() {
        return (
            <div>
                <Form inputs={this.state.inputs} updateForm={this.updateForm} />
            </div>
        )
    }
}
