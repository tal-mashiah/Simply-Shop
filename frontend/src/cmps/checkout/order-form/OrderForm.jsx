import React, { Component } from 'react'
import Form from '../../general/Form.jsx';
export default class OrderForm extends Component {
    state = {
        personalInputs: [
            { type: 'text', name: 'fullName', value: 'שם מלא', validation: 'required langAndMin2Char twoWords' },
            { type: 'tel', name: 'phone', value: 'טלפון נייד', validation: 'required phone' },
            { type: 'text', name: 'email', value: 'אימייל', validation: 'required email' }
        ],
        orderInputs: [
            { type: 'text', name: 'city', value: 'עיר / יישוב', validation: 'required langAndMin2Char' },
            { type: 'text', name: 'street', value: 'רחוב', validation: 'required' },
            { type: 'number', name: 'number', value: 'מספר בית', validation: 'required' },
            { type: 'number', name: 'apartment', value: 'דירה', validation: '' },
            { type: 'text', name: 'postal', value: 'מיקוד', validation: 'required' },
            { type: 'text', name: 'mailbox', value: 'ת.ד', validation: '' },
            { type: 'textarea', name: 'notes', value: 'הערות', validation: '' },
        ]
    }
    render() {
        const {personalInputs, orderInputs} = this.state;
        return (
            <div>
                <h1>פרטי הזמנה</h1>
                <div className="flex justify-around">
                    <div className="section-container">
                        <h2>פרטים אישיים:</h2>
                        <Form inputs={personalInputs} />
                    </div>
                    <div className="section-container">
                        <h2>פרטי משלוח:</h2>
                        <Form inputs={orderInputs} />
                    </div>
                </div>
            </div>
        )
    }
}
