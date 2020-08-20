import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateForm, signup, login } from '../actions/UserActions';

import Form from '../cmps/general/Form.jsx';

const initRegisterInputs = [
    { type: 'text', name: 'fullName', label: 'שם מלא', autoComplete: 'name', validation: ['required', 'langAndMin2Char', 'twoWords'] },
    { type: 'text', name: 'email', label: 'אימייל', autoComplete: 'email', validation: ['required', 'email'] },
    { type: 'password', name: 'password', label: 'סיסמה', toggleVisibility: true, validation: ['required', 'passvalid', 'min8Char', 'engAndNums'] },
    { type: 'password', name: 'passwordValidation', label: 'אימות סיסמה', toggleVisibility: true, validation: ['required', 'passvalid'] }
];

const initLoginInputs = [
    { type: 'text', name: 'email', label: 'אימייל', autoComplete: 'email', validation: ['required', 'email'] },
    { type: 'password', name: 'password', label: 'סיסמה', autoComplete: 'current-password', toggleVisibility: true, validation: ['required', 'min8Char', 'engAndNums'] }
];

function Login({ match, location, updateForm, login, signup, form }) {

    const [pageName, setPageName] = useState(null);
    const [clearForm, setClearForm] = useState(false);
    const [registerInputs] = useState(initRegisterInputs);
    const [loginInputs] = useState(initLoginInputs);

    const onUpdateForm = useCallback((isValid, form) => {
        updateForm(isValid, form);
    }, [updateForm]);

    useEffect(() => {
        onUpdateForm(false, null);
        setPageName(match.params.pageName);
        setClearForm(clearForm => !clearForm);
    }, [match.params.pageName, onUpdateForm])

    const setUser = () => {
        if (!form.isValid) return;
        if (pageName === 'login') {
            login(form.input, location.lastRoute);
        } else {
            signup(form.input);
        }
    }

    if (!pageName) return null;
    return (
        <div className="login flex column align-center">
            <div className="page-nav flex justify-around">
                <Link to="/auth/login"> <div className={pageName === 'login' ? "login active" : "login"}>התחבר</div></Link>
                <Link to="/auth/register"> <div className={pageName === 'register' ? "register active" : "register"}>הרשם</div></Link>
            </div>
            <Form inputs={pageName === 'login' ? loginInputs : registerInputs} updateForm={onUpdateForm} clearForm={clearForm} />
            <button onClick={setUser} className={form.isValid ? "main-btn primary" : "main-btn primary disabled"}>{pageName === 'login' ? 'התחבר' : 'הרשם'}</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        form: state.user.form
    };
};

const mapDispatchToProps = {
    updateForm,
    signup,
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);