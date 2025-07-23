import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/contact.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const res = await axios.post('http://localhost:5000/api/messages', {
                email,
                name,
                message
            });

            console.log(res.data);
            alert('Message Sent!');
            
            setEmail('');
            setName('');
            setMessage('');

        } catch (err) {
            console.error(err);
            alert('Failed to send message');
        }
    };

    return (
        <div className="contact-section">
            <h2 className='heading'>/Contact Me</h2>
            <p>
                If you would like to get in touch, feel free to reach out via email.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>

                <input 
                    className='contact-input' 
                    type="email" 
                    placeholder="Your Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <input 
                    type="text" 
                    className="contact-input" 
                    placeholder='Your Name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <textarea 
                    className='contact-textarea' 
                    placeholder="Your Message" 
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
