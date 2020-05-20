import React, { Component } from 'react';
import Form from '../../general/Form.jsx';

export default class Edit extends Component {
    state = {
        inputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['phone'] },
            { type: 'text', name: 'email', label: 'אימייל', validation: ['required', 'email'] }
        ]
    }

    componentDidMount() {
        console.log(this.props.user);
        
    }
    

    updateForm = (isValid, form) => {
        // this.props.updateForm(isValid, form);
    }

    render() {
        const {inputs} = this.state;
        return (
            <div>
                <Form inputs={inputs} updateForm={this.updateForm} />
            </div>
        )
    }
}
