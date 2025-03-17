import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeDashboard.css';
import Navbar from '../../components/Navbar/Navbar';

const EmployeeDashboard = () => {
  const navigate = useNavigate(); // Define navigate using useNavigate

  return (
    <div className="employee-dashboard">
      {/* <h1>Employee Dashboard</h1> */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Employee Self-Service Portal</h1>
          <p className="hero-tagline">Empowering Employees Through Self-Service</p>
        </div>
      </div>
      <div className="dashboard-grid">
        {/* Profile Management Card */}
        <div className="dashboard-card">
          <h2>My Profile</h2>
          <p>View and update personal details, upload documents</p>
          <button className="dashboard-button" onClick={() => navigate('/employee-profile')}>Edit Profile</button>
        </div>

        {/* Leave Management Card */}
        <div className="dashboard-card">
          <h2>Leave Management</h2>
          <p>Apply for leave, check leave balance and status</p>
          <button className="dashboard-button"onClick={()=>navigate('/LeaveRequestForm')}>Apply Leave</button>
        </div>

        {/* Attendance Management Card */} 
        <div className="dashboard-card"> 
          <h2>Attendance Management</h2> 
          <p>Check your attendance records and remaining leaves</p> 
          <button className="dashboard-button" onClick={() => navigate('/attendance-management')}>View Attendance</button> 
        </div> 


        {/* Payslips Card */}
        <div className="dashboard-card">
          <h2>Payslips</h2>
          <p>View and download monthly payslips</p>
          <button className="dashboard-button" onClick={()=> navigate('/payslip')}>View Payslips</button>
        </div>

        {/* Training Card */}
        <div className="dashboard-card">
          <h2>Training</h2>
          <p>Access training modules, track progress</p>
          <button className="dashboard-button" onClick={()=> navigate('/empTraining')}>Start Training</button>
        </div>

        {/* Documents Card */}
        <div className="dashboard-card">
          <h2>Documents</h2>
          <p>Access important documents and certificates</p>
          <button className="dashboard-button" onClick={()=> navigate('/documents')}>View Documents</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
