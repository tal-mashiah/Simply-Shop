import React, { Component } from 'react';
import GoogleMap from '../cmps/contact/GoogleMap.jsx';
import ContactForm from '../cmps/contact/ContactForm.jsx';
import ContactInfo from '../cmps/contact/ContactInfo.jsx';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="top-container flex justify-center">
                    <ContactForm />
                    <ContactInfo />
                </div>
                <GoogleMap />
            </div>
        )
    }
}
