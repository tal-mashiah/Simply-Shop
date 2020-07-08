import React from 'react';
import Logo from '../header/Logo.jsx';
import FooterNav from './FooterNav.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
    return (
        <footer className="flex justify-between align-center">
            <FooterNav/>
            <Logo logo='footer-logo'/>
            <SocialLinks/>
        </footer>
    )
}
