import React from 'react'

export default function ContactInfo() {
    return (
        <div className="contact-info">
            <h1>פרטי התקשרות</h1>

            <div className="phone flex">
                <div className="text">054-592-9187</div>
                <i className="fas fa-phone"></i>
            </div>

            <div className="address flex">
                <div className="text">אבן גבירול 69, תל אביב-יפו</div>
                <i className="fas fa-map-marker-alt"></i>
            </div>

            <div className="email flex">
                <div className="text">info@alakazem.co.il</div>
                <i className="far fa-envelope"></i>
            </div>

            <div className="whatsapp flex">
                <div className="text">לחץ להתחלת התכתבות</div>
                <i className="fab fa-whatsapp"></i>
            </div>
        </div>
    )
}
