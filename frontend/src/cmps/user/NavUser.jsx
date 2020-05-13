import React from 'react';
import { Link } from 'react-router-dom';

export default function NavUser() {
    return (
        <div className='link-container'>
            <div className="nav-user">
                <i className="fas fa-user"></i>
                <div className="modal">
                    <Link to="/register"><button className="main-btn primary">הרשם</button></Link>
                    <div className="login">כבר רשום? <Link to="/login">התחבר עכשיו</Link></div>
                </div>
            </div>
        </div>
    )
}
