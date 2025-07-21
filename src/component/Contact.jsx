import React from 'react';
import '../CSS/contact.css';

const Contact = () => {
    return (
        <div className="contact-section">
            <h2 className='heading'>/Contact Me</h2>
            <p>
                If you would like to get in touch, feel free to reach out via email.
            </p>
            <form className="contact-form">
                {/* <fieldset> */}
                    {/* <legend>Email:</legend> */}
                    <input className='contact-input' type="email" id="email" placeholder="Your Email" />
                    <input type="text" className="contact-input" placeholder='Your Name' />
                    <textarea className='contact-textarea' id="message" placeholder="Your Message" rows="4"></textarea>
                {/* </fieldset> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;