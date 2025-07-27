import React from "react";
import '../CSS/About.css'; 
const About = () => {
    return (
        <div className="about-section">
            <div className="intro">
                <h2 className="heading">/about me-</h2>
                <p>
                    Hello! I'm <span className='highlight-text'>Tanishq Soni</span> — a self-taught developer with a deep curiosity for technology and a relentless drive to build meaningful digital experiences. What began as a fascination with how things work soon evolved into a passion for full-stack web development, backend systems, and scalable architecture. I thrive on turning complex problems into elegant, functional solutions — and I'm always exploring new tools, technologies, and ideas to push my craft forward</p>
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