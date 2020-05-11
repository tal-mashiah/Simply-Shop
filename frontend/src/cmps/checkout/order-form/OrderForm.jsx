import React, { Component } from 'react'
import Form from '../../general/Form.jsx';
export default class OrderForm extends Component {
    state = {
        personalInputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['required', 'phone'] },
            { type: 'text', name: 'email', label: 'אימייל', validation: ['required', 'email'] }
        ],
        orderInputs: [
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
        const { personalInputs, orderInputs } = this.state;
        return (
            <div>
                <h1>פרטי הזמנה</h1>
                <div className="flex justify-around">
                    <div className="form-section-container">
                        <h2>פרטים אישיים:</h2>
                        <Form inputs={personalInputs} />
                    </div>
                    <div className="form-section-container">
                        <h2>פרטי משלוח:</h2>
                        <Form inputs={orderInputs} />
                    </div>
                </div>
            </div>
        )
    }
}
