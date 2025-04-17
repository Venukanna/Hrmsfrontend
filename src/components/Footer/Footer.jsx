import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { SiTrustpilot } from 'react-icons/si';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <h3>Join Our HR Community</h3>
          <p>Get the latest HR trends, tips, and exclusive content delivered to your inbox</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
              <span className="send-icon">→</span>
            </button>
          </form>
          <div className="trust-badges">
            <div className="badge">
              <RiVerifiedBadgeFill className="badge-icon" />
              <span>GDPR Compliant</span>
            </div>
            <div className="badge">
              <SiTrustpilot className="badge-icon" />
              <span>4.9/5 Stars</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-column company-info">
          <div className="logo-wrapper">
            <span className="logo-icon">👔</span>
            <span className="logo-text">HR<span>Pro</span></span>
          </div>
          <p className="company-description">
            Revolutionizing HR management since 2015 with innovative solutions for modern workplaces.
          </p>
          <div className="awards">
            <div className="award">
              <span className="trophy">🏆</span>
              <span>Best HR Software 2025</span>
            </div>
            <div className="award">
              <span className="trophy">🌟</span>
              <span>Top Workplace Solution</span>
            </div>
          </div>
        </div>

        <div className="footer-column quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/blog">HR Insights</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/demo">Request Demo</a></li>
          </ul>
        </div>

        <div className="footer-column resources">
          <h4>Resources</h4>
          <ul>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="/webinars">Webinars</a></li>
            <li><a href="/hr-guides">HR Guides</a></li>
            <li><a href="/api-docs">API Documentation</a></li>
            <li><a href="/status">System Status</a></li>
            <li><a href="/partners">Partners</a></li>
          </ul>
        </div>

        {/* <div className="footer-column contact-info">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>123 Innovation Blvd, Tech City, CA 90210</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+1 (800) HR-PRO-1</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>hello@hrpro.com</span>
          </div>
          <div className="contact-item">
            <FaRegClock className="contact-icon" />
            <span>Mon-Fri: 9AM-6PM EST</span>
          </div>
        </div>

        <div className="footer-column social-links">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon linkedin">
              <FaLinkedin />
            </a>
            <a href="#" className="social-icon twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon instagram">
              <FaInstagram />
            </a>
          </div>
          <div className="app-download">
            <p>Get our mobile app</p>
            <div className="app-buttons">
              <button className="app-store">App Store</button>
              <button className="play-store">Google Play</button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} HRPro. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;