import React from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EmployeeHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="employee-header">
      <div className="header-left">
        <h1 className="page-title">Employee Self-Service Portal</h1>
      </div>
      
      <div className="header-actions">
        <button className="header-btn" onClick={() => navigate('/about')}>
          About Us
        </button>
        <button className="header-btn" onClick={() => navigate('/contact')}>
          Contact
        </button>

        <div className="user-profile">
          <FaUserCircle className="user-avatar" />
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-role">Software Engineer</span>
          </div>
        </div>
        <button className="logout-btn" onClick={() => navigate('/login')}>
          <FaSignOutAlt />
        </button>
      </div>
    </header>
  );
};

export default EmployeeHeader;