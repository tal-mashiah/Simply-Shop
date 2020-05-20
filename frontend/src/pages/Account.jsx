import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

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

    render() {
        const { pageName } = this.state;
        const { loggedInUser } = this.props;
        // console.log(loggedInUser);
        return (
            <div className="acount">
                <div className="hero flex align-center justify-center"> {loggedInUser.fullName}</div>
                <div className="page-container">
                    <div className="page-nav flex justify-around">
                        <Link to="/account/orders"> <div className={pageName === 'orders' ? "orders active" : "orders"}>הזמנות</div></Link>
                        <Link to="/account/edit"> <div className={pageName === 'edit' ? "edit active" : "edit"}>עריכת חשבון</div></Link>
                        <Link to="/account/address"> <div className={pageName === 'address' ? "address active" : "address"}>עריכת כתובת</div></Link>
                        <Link to="/account/password"> <div className={pageName === 'password' ? "password active" : "password"}>שינוי סיסמה</div></Link>
                    </div>
                    {pageName === 'orders' && <Order />}
                    {pageName === 'edit' && <Edit user={loggedInUser}/>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        form: state.user.form,
        loggedInUser: state.user.loggedInUser,
        isLoading: state.system.isLoading
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Account);