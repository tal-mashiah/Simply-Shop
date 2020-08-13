import React, { useState, useEffect } from 'react';
import Form from '../general/Form.jsx';

export default function Edit({ user, updateUser, setGrowl }) {

    const [inputs] = useState([
        { type: 'text', name: 'email', label: 'אימייל', disabled: true },
        { type: 'text', name: 'fullName', label: 'שם מלא', validation: ['required', 'langAndMin2Char', 'twoWords'] },
        { type: 'text', name: 'city', label: 'עיר / יישוב', validation: ['langAndMin2Char'] },
        { type: 'text', name: 'street', label: 'רחוב' },
        { type: 'number', name: 'number', label: 'מספר בית' },
        { type: 'number', name: 'apartment', label: 'דירה' },
        { type: 'text', name: 'postal', label: 'מיקוד' },
        { type: 'text', name: 'mailbox', label: 'ת.ד' },
        { type: 'tel', name: 'phone', label: 'טלפון נייד', validation: ['phone'] }
    ])

    const [isValid, setIsValid] = useState(null)
    const [form, setForm] = useState(null)
    const [updatedInputs, setUpdatedInputs] = useState(null)

    useEffect(() => {
        const mappedInputs = inputs.map(input => {
            for (let [key, value] of Object.entries(user)) {
                if (input.name === key) {
                    input.value = value;
                }
            }

            return input;
        })
        setUpdatedInputs(mappedInputs)
    }, [inputs, user])

    const updateForm = (isValid, form) => {
        setIsValid(isValid)
        setForm(form)
    }

    const checkIfFormChanged = (form, user) => {
        for (const [key, value] of Object.entries(form)) {
            if (user[key] !== value) {
                return true;
            }
        }
        setGrowl('לא בוצע שינוי בטופס', 'warn')
        return false;
    }

    const onUpdateUser = () => {
        const isChanged = checkIfFormChanged(form, user)

        if (isValid && isChanged) {
            form._id = user._id
            updateUser(form);
        }
    }

    if (!updatedInputs) return null;
    return (
        <div className="flex column align-center">
            <Form inputs={updatedInputs} updateForm={updateForm} />
            <button className={isValid ? "main-btn primary" : "main-btn primary disabled"} onClick={onUpdateUser}>עדכון פרטים</button>
        </div>
    )

}
