import React from 'react';


export default function ContactInfo() {
    return (
        <div className="contact-info">
            <h1>פרטי התקשרות</h1>

            <a href="tel:054-539-1118">
                <div className="phone flex justify-between">
                    <div className="text">054-592-9187</div>
                    <i className="fas fa-phone"></i>
                </div>
            </a>

            <div className="address flex justify-between">
                <div className="text">אבן גבירול 69, תל אביב-יפו</div>
                <i className="fas fa-map-marker-alt"></i>
            </div>

            <div className="email flex justify-between">
                <div className="text">info@simplyshop.co.il</div>
                <i className="far fa-envelope"></i>
            </div>
            <a rel="noopener noreferrer" target="_blank" href="https://wa.me/9720545929187" >
                <div className="whatsapp flex justify-between">
                    <div className="text">להתחלת התכתבות</div>
                    <i className="fab fa-whatsapp"></i>
                </div>
            </a>
        </div>
    )
}
