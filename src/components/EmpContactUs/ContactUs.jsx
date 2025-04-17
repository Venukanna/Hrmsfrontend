import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! We'll contact you shortly.`);
  };

  return (
    <div className="contact-container">
      <div className="glass-card">
        <h2>Need Help?</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder=" "
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input 
              type="email" 
              placeholder=" "
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <label>Work Email</label>
          </div>

          <div className="input-group">
            <select
              value={formData.issue}
              onChange={(e) => setFormData({...formData, issue: e.target.value})}
              required
            >
              <option value="">Select an issue</option>
              <option value="payroll">Payroll</option>
              <option value="benefits">Benefits</option>
              <option value="pto">Time Off</option>
            </select>
          </div>

          <button type="submit" className="cta-button">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;