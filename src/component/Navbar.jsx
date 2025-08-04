// import React from 'react';
import React, { useState, useEffect } from 'react';
import '../App.css';
import '../CSS/Navbar.css'; // Optional: for styling

const Navbar = () => {
const getIsNight = () => {
    const hour = new Date().getHours();
    return (hour >= 19 || hour < 6); // 7 PM se 6 AM dark mode
  };

  const [darkMode, setDarkMode] = useState(getIsNight());

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

    return (
        <nav className="navbar">
            <div className="hamburger">
          <div className="menu-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className="menu">
            <button className="btn" onClick={() => window.scrollTo(0, 0)}>Home</button>
                <button className="btn cta" onClick={() => window.scrollTo(0, document.querySelector('.about-section').offsetTop)}>About Me</button>
                <button className="btn" onClick={() => window.scrollTo(0, document.querySelector('.projects-section').offsetTop)}>Projects</button>
                <button className="btn" onClick={() => window.scrollTo(0, document.querySelector('.social-medias').offsetTop)}>Contact</button>
                <button onClick={toggleTheme} className="theme-button">Theme</button>
          </ul>
        </div>
            <div className="navbar-links">
                <button className="btn" onClick={() => window.scrollTo(0, 0)}>Home</button>
                <button className="btn cta" onClick={() => window.scrollTo(0, document.querySelector('.about-section').offsetTop)}>About Me</button>
                <button className="btn" onClick={() => window.scrollTo(0, document.querySelector('.projects-section').offsetTop)}>Projects</button>
                <button className="btn" onClick={() => window.scrollTo(0, document.querySelector('.social-medias').offsetTop)}>Contact</button>
                <button onClick={toggleTheme} className="theme-button">
        {darkMode ? (
          <img
            src="https://img.icons8.com/color/48/full-moon.png"
            alt="Dark Mode"
            width="32"
            height="32"
          />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
            <polygon fill="#ff9800" points="37,29 42,24 37,19 37,11 29,11 24,6 19,11 11,11 11,19 6,24 11,29 11,37 19,37 24,42 29,37 37,37"></polygon>
            <path fill="#ffeb3b" d="M13,24c0,6.1,4.9,11,11,11c6.1,0,11-4.9,11-11s-4.9-11-11-11C17.9,13,13,17.9,13,24"></path>
          </svg>
        )}
      </button>
            </div>
        </nav>
    );
};

export default Navbar;
