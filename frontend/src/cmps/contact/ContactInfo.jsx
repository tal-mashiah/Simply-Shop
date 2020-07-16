import React from 'react';


export default function ContactInfo() {
    return (
        <div className="contact-info">
            <h1>פרטי התקשרות</h1>

            <div className="phone flex justify-between">
                <a href="tel:054-539-1118"><div className="text">054-592-9187</div></a>
                <i className="fas fa-phone"></i>
            </div>

            <div className="address flex justify-between">
                <div className="text">אבן גבירול 69, תל אביב-יפו</div>
                <i className="fas fa-map-marker-alt"></i>
            </div>

            <div className="email flex justify-between">
                <div className="text">info@alakazem.co.il</div>
                <i className="far fa-envelope"></i>
            </div>
            <div className="whatsapp flex justify-between">
                <a rel="noopener noreferrer" target="_blank" href="https://wa.me/9720545929187" ><div className="text">לחץ להתחלת התכתבות</div></a>
                <i className="fab fa-whatsapp"></i>
            </div>
        </div>
    )
}
