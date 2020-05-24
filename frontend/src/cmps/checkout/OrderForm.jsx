import React, { Component } from 'react'
import Form from '../general/Form.jsx';
import { Link } from 'react-router-dom';
import history from '../../history';
export default class OrderForm extends Component {
    state = {
        inputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'text', name: 'email', label: 'אימייל', validation: ['required', 'email'] },
            { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['required', 'phone'] },
            { type: 'text', name: 'city', label: 'עיר / יישוב', validation: ['required', 'langAndMin2Char'] },
            { type: 'text', name: 'street', label: 'רחוב', validation: ['required'] },
            { type: 'number', name: 'number', label: 'מספר בית', validation: ['required'] },
            { type: 'number', name: 'apartment', label: 'דירה' },
            { type: 'text', name: 'postal', label: 'מיקוד', validation: ['required'] },
            { type: 'text', name: 'mailbox', label: 'ת.ד' },
            { type: 'textarea', name: 'notes', label: 'הערות' }
        ],
        updatedInputs: null
    }

    componentDidMount() {
        const {user} = this.props;
        if(user){
            const updatedInputs = this.state.inputs.map(input => {
                for (let [key, value] of Object.entries(user)) {
                    if (input.name === key) {
                        input.value = value;
                    }
                }
                return input;
            })
            this.setState({ updatedInputs });
        } else{
            this.setState({ updatedInputs: this.state.inputs });
        }
    }

    render() {
        const {updatedInputs} = this.state;
        const {user} = this.props;
        if(!updatedInputs) return null;   

        return (
            <div className="order-form">
                <h1>פרטי הזמנה</h1>
                {!user && <div className="checkout-login">לקוח/ה רשום? <Link to={{pathname: 'auth/login',lastRoute: history.location.pathname}}>התחבר/י עכשיו</Link></div>}
                <Form inputs={updatedInputs} updateForm={this.props.updateForm}/>
            </div>
        )
    }
}
