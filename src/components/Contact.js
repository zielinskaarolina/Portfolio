import React from "react";
import '../styles/contact.css'
import background from '../images/background.png'
import mail from '../images/mail.png'
import phone from '../images/phone.png'

const Contact = () => {
    return ( 
        <div className="contact">
            <h1 className="section-h1">Kontakt</h1>
            <div className="animation">
                <p className="text">Daj mi wejsc do gry jako front-end developer</p>
                <div className="monets-container">
                    <img src={mail} alt="" />
                    <img src={phone} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Contact;