import React from 'react';
import { useLocation } from 'react-router-dom';

export default function LogoutModal({ logout, toggleLogoutModal }) {
    let location = useLocation();
    return (
        <div onClick={toggleLogoutModal} className="account-screen flex justify-center align-center">
            <div onClick={(e) => e.stopPropagation()} className="logout-modal">
                <div className="title">כבר הולכים?</div>
                <div className="btns-container">
                    <button onClick={toggleLogoutModal} className="main-btn secondary">אני רוצה להישאר</button>
                    <button onClick={() => logout(location.pathname)} className="main-btn error">התנתק</button>
                </div>
            </div>
        </div>
    )
}
