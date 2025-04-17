import React from 'react';
import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="glass-card">
        <h2>About Our HR Team</h2>
        <p>
          We empower employees with cutting-edge HR solutions, fostering a 
          workplace where talent thrives and innovation happens.
        </p>
        
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Employees Supported</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">HR Assistance</span>
          </div>
        </div>

        <button className="cta-button">Join Our Team</button>
      </div>
    </div>
  );
};

export default AboutUs;
