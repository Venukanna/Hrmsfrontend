import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll contact you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to our HR experts!</p>
      </div>

      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group floating">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className="form-group floating">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="form-group floating">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Your Message</label>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
            <span className="arrow">→</span>
          </button>
        </form>

        <div className="contact-info">
          <div className="info-card">
            <div className="icon">📧</div>
            <h3>Email Us</h3>
            <p>hrsupport@group5.com</p>
          </div>

          <div className="info-card">
            <div className="icon">📱</div>
            <h3>Call Us</h3>
            <p>9963662332</p>
          </div>

          <div className="info-card">
            <div className="icon">🏢</div>
            <h3>Visit Us</h3>
            <p>HITEC City
            <br /> Hyderabad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;