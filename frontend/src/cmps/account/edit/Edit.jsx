import React, { Component } from 'react';
import Form from '../../general/Form.jsx';

export default class Edit extends Component {
    state = {
        isValid: null,
        form: null,
        inputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'text', name: 'email', label: 'אימייל', validation: ['required', 'email'] },
            { type: 'text', name: 'city', label: 'עיר / יישוב', validation: ['langAndMin2Char'] },
            { type: 'text', name: 'street', label: 'רחוב' },
            { type: 'number', name: 'number', label: 'מספר בית' },
            { type: 'number', name: 'apartment', label: 'דירה' },
            { type: 'text', name: 'postal', label: 'מיקוד' },
            { type: 'text', name: 'mailbox', label: 'ת.ד' },
            { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['phone'] }
        ],
        updatedInputs: null
    }

    componentDidMount() {
        const updatedInputs = this.state.inputs.map(input => {
            for (let [key, value] of Object.entries(this.props.user)) {
                if (input.name === key) {
                    input.value = value;
                }
            }
            return input;
        })
        this.setState({ updatedInputs });
    }

    updateForm = (isValid, form) => {
        this.setState({ isValid, form });
    }

    onUpdateUser = () => {
        const { isValid, form } = this.state;
        const { updateUser, user } = this.props;
        if (isValid) {
            form._id = user._id
            updateUser(form);
        }
    }

    render() {
        const { updatedInputs, isValid } = this.state;
        if (!updatedInputs) return null;
        return (
            <div className="flex column align-center">
                <Form inputs={updatedInputs} updateForm={this.updateForm} />
                <button className={isValid ? "main-btn primary" : "main-btn primary disabled"} onClick={this.onUpdateUser}>עדכון פרטים</button>
            </div>
        )
    }
}
