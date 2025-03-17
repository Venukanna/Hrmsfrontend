import React from 'react';
import './Footer.css'; // Import the CSS file
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa'; // Icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a leading HR management platform dedicated to simplifying employee management and enhancing workplace productivity.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/hr-dashboard">HR Dashboard</a></li>
            <li><a href="/employee-dashboard">Employee Dashboard</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              {/* <FaEnvelope className="icon" /> support@hrdashboard.com */}
            </li>
            <li>
              {/* <FaPhone className="icon" /> +1 (123) 456-7890 */}
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              {/* <FaLinkedin className="icon" /> */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              {/* <FaTwitter className="icon" /> */}
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              {/* <FaFacebook className="icon" /> */}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HR Dashboard. All rights reserved.</p>
        <p>Powered by <strong>Your Company Name</strong></p>
      </div>
    </footer>
  );
};

export default Footer;