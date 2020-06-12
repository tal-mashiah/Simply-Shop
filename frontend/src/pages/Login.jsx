import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

import { connect } from 'react-redux';
import { updateForm, signup, login } from '../actions/UserActions';

import Form from '../cmps/general/Form.jsx';
import Spinner from '../cmps/general/Spinner.jsx';

class Login extends Component {
    state = {
        pageName: null,
        registerInputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'text', name: 'email', label: 'אימייל', validation: ['required', 'email'] },
            { type: 'password', name: 'password', label: 'סיסמה', toggleVisibility: true, validation: ['required', 'passvalid', 'min8Char', 'engAndNums'] },
            { type: 'password', name: 'passwordValidation', label: 'אימות סיסמה', toggleVisibility: true, validation: ['required', 'passvalid'] }
        ],
        loginInputs: [
            { type: 'text', name: 'email', label: 'אימייל', validation: ['required', 'email'] },
            { type: 'password', name: 'password', label: 'סיסמה', toggleVisibility: true, validation: ['required', 'min8Char', 'engAndNums'] }
        ]
    }

    componentDidMount() {
        this.loadPageData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pageName !== this.props.match.params.pageName) {
            this.loadPageData();
        }
    }

    loadPageData() {
        const { pageName } = this.props.match.params;
        this.updateForm(false, null);
        this.setState({ pageName });
    }

    updateForm = (isValid, form) => {
        this.props.updateForm(isValid, form);
    }

    setUser = () => {
        const { pageName } = this.state;
        const { login, signup, form } = this.props;
        const { lastRoute } = this.props.location;
        if (!form.isValid) return;
        if (pageName === 'login') {
            login(form.input, lastRoute);
        } else {
            signup(form.input);
        }
    }

    onChange = value => {
        console.log("Captcha value:", value);
    }

    render() {
        const { loginInputs, registerInputs, pageName } = this.state;
        const { isLoading, form } = this.props;
        if (!pageName) return null;
        return (
            <div className="login flex column align-center">
                <div className="page-nav flex justify-around">
                    <Link to="/auth/login"> <div className={pageName === 'login' ? "login active" : "login"}>התחבר</div></Link>
                    <Link to="/auth/register"> <div className={pageName === 'register' ? "register active" : "register"}>הרשם</div></Link>
                </div>
                {!isLoading || <Spinner />}
                {pageName === 'login' ?
                    <Form inputs={loginInputs} updateForm={this.updateForm} /> :
                    <Form inputs={registerInputs} updateForm={this.updateForm} />}
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={this.onChange}
                />
                <button onClick={this.setUser} className={form.isValid ? "main-btn primary" : "main-btn primary disabled"}>{pageName === 'login' ? 'התחבר' : 'הרשם'}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        form: state.user.form,
        isLoading: state.system.isLoading
    };
};

const mapDispatchToProps = {
    updateForm,
    signup,
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);