import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateUser, updatePassword, logout } from '../actions/UserActions';
import { setGrowl } from '../actions/GrowlActions';

import Order from '../cmps/account/order/Order';
import Edit from '../cmps/account/Edit';
import Password from '../cmps/account/Password';

class Account extends Component {
    state = {
        pageName: null,
        isLogoutModalShown: false
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
        this.setState({ pageName });
    }

    updateUser = (form) => {
        this.props.updateUser(form);
    }

    updatePassword = (form) => {
        const { loggedInUser, updatePassword } = this.props;
        form._id = loggedInUser._id;
        form.email = loggedInUser.email;
        delete form.passwordValidation;
        updatePassword(form);
    }

    toggleLogoutModal = () => {
        this.setState(prevState => ({
            isLogoutModalShown: !prevState.isLogoutModalShown
        }))
    }

    render() {
        const { pageName, isLogoutModalShown } = this.state;
        const { loggedInUser, setGrowl, logout } = this.props;
        if (!loggedInUser) return null;
        console.log('isLogoutModalShown: ', isLogoutModalShown);

        return (
            <div className="acount">
                <div className="hero flex align-center justify-center"> {loggedInUser.fullName}</div>
                <div className="page-container flex column align-center">
                    <div className="page-nav flex justify-around">
                        <Link to="/account/orders"> <div className={pageName === 'orders' ? "orders active" : "orders"}>הזמנות</div></Link>
                        <Link to="/account/edit"> <div className={pageName === 'edit' ? "edit active" : "edit"}>עריכת חשבון</div></Link>
                        <Link to="/account/password"> <div className={pageName === 'password' ? "password active" : "password"}>שינוי סיסמה</div></Link>
                        <Link onClick={this.toggleLogoutModal}><div>התנתק</div></Link>
                    </div>
                    {pageName === 'orders' && <Order userId={loggedInUser._id} />}
                    {pageName === 'edit' && <Edit user={loggedInUser} updateUser={this.updateUser} setGrowl={setGrowl} />}
                    {pageName === 'password' && <Password updatePassword={this.updatePassword} />}
                </div>
                {isLogoutModalShown &&
                    <div onClick={this.toggleLogoutModal} className="account-screen flex justify-center align-center">
                        <div onClick={(e) => e.stopPropagation()} className="logout-modal">
                            <div className="title">כבר הולכים?</div>
                            <div className="btns-container">
                                <button onClick={this.toggleLogoutModal} className="main-btn secondary">אני רוצה להישאר</button>
                                <button onClick={() => logout()} className="main-btn error">התנתק</button>
                            </div>
                        </div>
                    </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser
    };
};

const mapDispatchToProps = {
    updatePassword,
    updateUser,
    setGrowl,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);