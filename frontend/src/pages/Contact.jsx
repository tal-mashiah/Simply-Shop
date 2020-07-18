import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setGrowl } from '../actions/GrowlActions';

import contactService from '../services/contactService'
import GoogleMap from '../cmps/contact/GoogleMap.jsx';
import ContactForm from '../cmps/contact/ContactForm.jsx';
import ContactInfo from '../cmps/contact/ContactInfo.jsx';

class Contact extends Component {

    sendForm = (form) => {
        contactService.add(form)
        this.props.setGrowl('פנייתך התקבלה בהצלחה', 'success')
    }

    render() {
        return (
            <div className="contact">
                <div className="top-container flex justify-center">
                    <ContactForm sendForm={this.sendForm} />
                    <ContactInfo />
                </div>
                <GoogleMap />
            </div>
        )
    }
}

const mapDispatchToProps = {
    setGrowl
};

export default connect(null, mapDispatchToProps)(Contact);