import React from 'react'

import { connect } from 'react-redux';
import { setGrowl } from '../actions/GrowlActions';

import contactService from '../services/contactService'
import GoogleMap from '../cmps/contact/GoogleMap.jsx';
import ContactForm from '../cmps/contact/ContactForm.jsx';
import ContactInfo from '../cmps/contact/ContactInfo.jsx';

const Contact = ({ setGrowl }) => {

    const sendForm = (form) => {
        contactService.add(form)
        setGrowl('פנייתך התקבלה בהצלחה', 'success')
    }

    return (
        <div className="contact">
            <div className="top-container flex justify-center">
                <ContactForm sendForm={sendForm} />
                <ContactInfo />
            </div>
            <GoogleMap />
        </div>
    )
}

const mapDispatchToProps = {
    setGrowl
};

export default connect(null, mapDispatchToProps)(Contact);