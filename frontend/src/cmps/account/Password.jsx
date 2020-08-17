import React, { useState } from 'react';
import Form from '../general/Form.jsx';

export default function Password({ updatePassword }) {

    const [isValid, setIsValid] = useState(null)
    const [form, setForm] = useState(null)
    const [inputs, setInputs] = useState([
        { type: 'password', name: 'currPassword', label: 'סיסמה נוכחית', toggleVisibility: true, validation: ['required'] },
        { type: 'password', name: 'password', label: 'סיסמה חדשה', toggleVisibility: true, validation: ['required', 'passvalid', 'min8Char', 'engAndNums'] },
        { type: 'password', name: 'passwordValidation', label: 'אימות סיסמה', toggleVisibility: true, validation: ['required', 'passvalid'] }
    ])

    const updateForm = (isValid, form) => {
        setIsValid(isValid);
        setForm(form);
    }

    const onUpdatePassword = () => {
        if (isValid) {
            inputs.forEach(input => {
                delete input.value;
            });
            setInputs(inputs);
            updatePassword(form);
        }
    }


    return (
        <div className="flex column align-center">
            <Form inputs={inputs} updateForm={updateForm} />
            <button className={isValid ? "main-btn primary" : "main-btn primary disabled"} onClick={onUpdatePassword}>עדכון סיסמה</button>
        </div>
    )

}
