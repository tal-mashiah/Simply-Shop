import React, { Component } from 'react'
import Form from '../general/Form.jsx';
import { Link } from 'react-router-dom';
import history from '../../history';
export default class OrderForm extends Component {
    state = {
        inputs: [
            { type: 'text', name: 'email', label: 'אימייל', validation: ['required', 'email'] },
            { type: 'text', name: 'fullName', label: 'שם מלא', validation: ['required', 'langAndMin2Char', 'twoWords'] },
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
        const { user } = this.props;
        const { inputs } = this.state;
        if (user) {
            const updatedInputs = inputs.map(input => {
                let inputCopy = { ...input };
                for (let [key, value] of Object.entries(user)) {
                    if (inputCopy.name === key) {
                        inputCopy.value = value;
                    }
                    if (inputCopy.name === 'email') {
                        delete inputCopy.validation;
                        inputCopy.disabled = true;
                    }
                }
                return inputCopy;
            })
            this.setState({ updatedInputs });
        } else {
            this.setState({ updatedInputs: inputs });
        }
    }

    componentDidUpdate(prevProps) {
        if (!this.props.user && prevProps.user) {
            this.setState({ updatedInputs: this.state.inputs });
        }
    }

    onLogOut = () => {
        const { logout, updateForm } = this.props;
        logout()
        updateForm(false,null);
    }


    render() {
        const { updatedInputs } = this.state;
        const { user, updateForm } = this.props;
        if (!updatedInputs) return null;

        return (
            <div className="order-form">
                <h1>פרטי הזמנה</h1>
        {user ? <div className="checkout-auth">{`לא ${user.fullName}?`} <span onClick={this.onLogOut}>התנתק</span></div> :
                <div className="checkout-auth">לקוח/ה רשום? <Link to={{ pathname: 'auth/login', lastRoute: history.location.pathname }}>התחבר/י עכשיו</Link></div>}
                <Form inputs={updatedInputs} updateForm={updateForm} />
            </div>
        )
    }
}
