import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterNav() {
    return (
        <div className="footer-nav flex column">
            <Link to='/about'>אודות</Link>
            <Link to='/terms'>תקנון</Link>
            <Link to='/contact'>צור קשר</Link>
        </div>
    )
}
