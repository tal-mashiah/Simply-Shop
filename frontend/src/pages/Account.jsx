import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateUser } from '../actions/UserActions';

import Order from '../cmps/account/order/Order';
import Edit from '../cmps/account/edit/Edit';

class Account extends Component {
    state = {
        pageName: null,
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

    render() {
        const { pageName } = this.state;
        const { loggedInUser } = this.props;

        return (
            <div className="acount">
                <div className="hero flex align-center justify-center"> {loggedInUser.fullName}</div>
                <div className="page-container flex column align-center">
                    <div className="page-nav flex justify-around">
                        <Link to="/account/orders"> <div className={pageName === 'orders' ? "orders active" : "orders"}>הזמנות</div></Link>
                        <Link to="/account/edit"> <div className={pageName === 'edit' ? "edit active" : "edit"}>עריכת חשבון</div></Link>
                        <Link to="/account/password"> <div className={pageName === 'password' ? "password active" : "password"}>שינוי סיסמה</div></Link>
                    </div>
                    {pageName === 'orders' && <Order />}
                    {pageName === 'edit' && <Edit user={loggedInUser} updateUser={this.updateUser}/>}
                </div>
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
    updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);