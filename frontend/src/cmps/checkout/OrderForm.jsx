import React, { Component } from 'react'
import Form from '../general/Form.jsx';
export default class OrderForm extends Component {
    state = {
        inputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['required', 'phone'] },
            { type: 'text', name: 'email', label: 'אימייל', validation: ['required', 'email'] },
            { type: 'text', name: 'city', label: 'עיר / יישוב', validation: ['required', 'langAndMin2Char'] },
            { type: 'text', name: 'street', label: 'רחוב', validation: ['required'] },
            { type: 'number', name: 'number', label: 'מספר בית', validation: ['required'] },
            { type: 'number', name: 'apartment', label: 'דירה' },
            { type: 'text', name: 'postal', label: 'מיקוד', validation: ['required'] },
            { type: 'text', name: 'mailbox', label: 'ת.ד' },
            { type: 'textarea', name: 'notes', label: 'הערות' }
        ]
    }

    render() {
        return (
            <div>
                <h1>פרטי הזמנה</h1>
                <Form inputs={this.state.inputs} updateForm={this.props.updateForm}/>
            </div>
        )
    }
}
