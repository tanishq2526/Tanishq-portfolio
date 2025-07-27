import React from 'react';
import '../CSS/footersocial.css';

const SocialLinks = () => {
    return (
        <div className="social-links-wrapper">
            <div className="social-medias">

                <a className="cta-button" href="https://mail.google.com/mail/?view=cm&fs=1&to=tanishq.25.ts@gmail.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                <path d="M12 13.5L2 6.75V18a1 1 0 001 1h18a1 1 0 001-1V6.75L12 13.5zm10-9h-1.2L12 10.5 3.2 4.5H2a1 1 0 00-1 1V5l11 8 11-8v-.5a1 1 0 00-1-1z"/>
                 </svg>
                <span className="tooltip">GMAIL</span>
               </a>


                <a className="cta-button" href="https://www.linkedin.com/in/Tanishq-Soni2005" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                        <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5v-10h3v10zm-1.5-11.27c-.96 0-1.75-.78-1.75-1.75S5.54 4.23 6.5 4.23s1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V19h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.85-1.56 3.04 0 3.6 2 3.6 4.61V19z"/>
                    </svg>
                    <span className="tooltip">LINKEDIN</span>
                </a>

                <a className="cta-button" href="https://github.com/tanishq2526" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                        <path d="M12 .3c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.38.6.11.82-.26.82-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.01 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.58C20.56 22.1 24 17.6 24 12.3c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span className="tooltip">GITHUB</span>
                </a>
            </div>

            <div className="footer-note">
                Made by <span>Tanishq</span>, with love ❤️
            </div>
        </div>
    );
};

export default SocialLinks;
