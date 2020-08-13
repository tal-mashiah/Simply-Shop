import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateUser, updatePassword, logout } from '../actions/UserActions';
import { loading, doneLoading } from '../actions/SystemActions';
import { setGrowl } from '../actions/GrowlActions';

import Order from '../cmps/account/order/Order';
import Edit from '../cmps/account/Edit';
import Password from '../cmps/account/Password';
import LogoutModal from '../cmps/account/LogoutModal';

function Account({ match, updateUser, loggedInUser, updatePassword, setGrowl, logout, loading, doneLoading, isLoading }) {

    const [pageName, setPageName] = useState(null)
    const [isLogoutModalShown, setIsLogoutModalShown] = useState(false)
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        setPageName(match.params.pageName)
    }, [match.params.pageName])

    const onUpdateUser = (form) => {
        updateUser(form);
    }

    const onUpdatePassword = (form) => {
        form._id = loggedInUser._id;
        form.email = loggedInUser.email;
        delete form.passwordValidation;
        updatePassword(form);
    }

    const toggleLogoutModal = () => setIsLogoutModalShown(isLogoutModalShown => !isLogoutModalShown);

    if (!loggedInUser) return null;
    return (
        <div className="acount">
            <div className="hero flex align-center justify-center"> {loggedInUser.fullName}</div>
            <div className="page-container flex column align-center">
                <div className="page-nav flex justify-around">
                    <Link to="/account/orders"> <div className={pageName === 'orders' ? "orders active" : "orders"}>הזמנות</div></Link>
                    <Link to="/account/edit"> <div className={pageName === 'edit' ? "edit active" : "edit"}>עריכת חשבון</div></Link>
                    <Link to="/account/password"> <div className={pageName === 'password' ? "password active" : "password"}>שינוי סיסמה</div></Link>
                    <div className="logout-section" onClick={toggleLogoutModal}><div>התנתק</div></div>
                </div>
                {pageName === 'orders' && <Order orders={orders} setOrders={setOrders} userId={loggedInUser._id} isLoading={isLoading} loading={loading} doneLoading={doneLoading} />}
                {pageName === 'edit' && <Edit user={loggedInUser} updateUser={onUpdateUser} setGrowl={setGrowl} />}
                {pageName === 'password' && <Password updatePassword={onUpdatePassword} />}
            </div>
            {isLogoutModalShown && <LogoutModal logout={logout} toggleLogoutModal={toggleLogoutModal} />}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
        isLoading: state.system.isLoading
    };
};

const mapDispatchToProps = {
    updatePassword,
    doneLoading,
    updateUser,
    setGrowl,
    loading,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);