import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateForm, signup, login, setError } from '../actions/UserActions';

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
        this.props.setError(null);
    }

    updateForm = (isValid, form) => {
        this.props.updateForm(isValid, form);
    }

    setUser = () => {
        const { pageName } = this.state;
        const { login, signup, form } = this.props;
        if (!form.isValid) return;
        if (pageName === 'login') {
            login(form.input);
        } else {
            signup(form.input);
        }
    }

    render() {
        const { loginInputs, registerInputs, pageName } = this.state;
        const { isLoading, growlMsg, form } = this.props;
        if (!pageName) return null;

        return (
            <div className="login flex column align-center">
                <div className="page-nav flex justify-around">
                    <Link to="/auth/login"> <div className={pageName === 'login' ? "login active" : "login"}>התחבר</div></Link>
                    <Link to="/auth/register"> <div className={pageName === 'register' ? "register active" : "register"}>הרשם</div></Link>
                </div>
                {!isLoading || <Spinner />}
                {!growlMsg || <div className="growl-msg err">{growlMsg}</div>}
                {pageName === 'login' ?
                    <Form inputs={loginInputs} updateForm={this.updateForm} /> :
                    <Form inputs={registerInputs} updateForm={this.updateForm} />}
                <button onClick={this.setUser} className={form.isValid ? "main-btn primary" : "main-btn primary disabled"}>{pageName === 'login' ? 'התחבר' : 'הרשם'}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        form: state.user.form,
        growlMsg: state.user.growlMsg,
        isLoading: state.system.isLoading
    };
};

const mapDispatchToProps = {
    updateForm,
    setError,
    signup,
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);