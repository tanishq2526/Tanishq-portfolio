import React from "react";
import '../CSS/About.css'; 
const About = () => {
    return (
        <div className="about-section">
            <div className="intro">
                <h2 className="heading">/about me-</h2>
                <p>
                    Hey there! I'm <span className="highlight-text">Tanishq Soni</span> — a self taught developer with a curious mind and a keyboard that's been through countless lines of trial, error, and breakthroughs. My journey started with a simple goal: build a Discord bot for fun. But that little experiment unlocked a world I couldn't look away from. Since then, I've been diving deep into full-stack web development, backend systems, and everything in between.</p>
            </div>
            <code><div className="technologies">
    <h2>/ Technologies I Use </h2>
    <ul>
        <li className="highlight-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="24" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
            JavaScript (ES6+)
        </li>
        <li className="highlight-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="24" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
            React.js
        </li>
        <li className="highlight-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="24" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
            Node.js
        </li>
        <li className="highlight-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" width="24" style={{ marginRight: '10px', verticalAlign: 'middle', backgroundColor: '#fff', borderRadius: '4px' }} />
            Express.js
        </li>
        <li className="highlight-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="24" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
            MongoDB
        </li> 
    </ul>
</div></code>

        </div>
    );
}

export default About;