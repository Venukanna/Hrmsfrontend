import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const switchToHRDashboard = () => {
    navigate('/hr-dashboard');
  };

  const switchToEmployeeDashboard = () => {
    navigate('/employee-dashboard');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">HRMS</div>
      <div className="navbar-actions">
        <button className="navbar-button" onClick={switchToHRDashboard}>
          Switch to HR Dashboard
        </button>
        <button className="navbar-button" onClick={switchToEmployeeDashboard}>
          Switch to Employee Dashboard
        </button>
      </div>
    </nav>
  );
};

export default Navbar;