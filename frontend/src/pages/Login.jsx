import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateForm } from '../actions/UserActions';

import Form from '../cmps/general/Form.jsx';

class Login extends Component {
    state = {
        pageName: null,
        registerInputs: [
            { type: 'text', name: 'fullName', label: 'שם מלא', validation: ['required', 'langAndMin2Char', 'twoWords'] },
            { type: 'text', name: 'email', label: 'אימייל', validation: ['required', 'email'] },
            { type: 'password', name: 'password', label: 'סיסמה', toggleVisibility: true, validation: ['required', 'passvalid', 'min8Char', 'engAndNums'] },
            { type: 'password', name: 'password-validation', label: 'אימות סיסמה', toggleVisibility: true, validation: ['required', 'passvalid'] }
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
        this.setState({ pageName })
    }

    updateForm = (isValid, form) => {
        this.props.updateForm(isValid, form);
    }

    render() {
        const { loginInputs, registerInputs, pageName } = this.state;
        const { isValid } = this.props;
        if (!pageName) return null;

        return (
            <div className="login flex column align-center">
                <div className="login-nav flex justify-center">
                    <Link to="/login"> <div className="login">התחבר</div></Link>
                    <div className="border">|</div>
                    <Link to="/register"> <div className="register">הרשם</div></Link>
                </div>
                {pageName === 'login' ?
                    <Form inputs={loginInputs} updateForm={this.updateForm} /> :
                    <Form inputs={registerInputs} updateForm={this.updateForm} />}
                <button className={isValid ? "main-btn primary" : "main-btn primary disabled"}>{pageName === 'login' ? 'התחבר' : 'הרשם'}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isValid: state.checkout.form.isValid
    };
};

const mapDispatchToProps = {
    updateForm
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);