
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HRDashboard.css';

const HRDashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="hr-dashboard">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Human Resources Management System</h1>
          <p className="hero-tagline">Empowering HR Excellence Through Technology</p>
        </div>
      </div>
      {/* <h1>HR Dashboard</h1> */}
      <div className="dashboard-grid">
        {/* Employee Management Card */}
        <div className="dashboard-card">
          <h2>Employee Management</h2>
          <p>Directory, workflows, self-service, document management</p>
          <button 
            className="dashboard-button"
            onClick={() => handleNavigation('/employee-management')}

          >
            Manage Employees
          </button>
        </div>

        {/* Payroll Management Card */}
        <div className="dashboard-card">
          <h2>Payroll Management</h2>
          <p>Process payroll, generate payslips, and tax reports</p>
          <button 
            className="dashboard-button"
            onClick={() => handleNavigation('/payroll')}

          >
            Process Payroll
          </button>
        </div>

        {/* Attendance Management Card */}
        <div className="dashboard-card">
          <h2>Attendance Management</h2>
          <p>Monitor attendance, approve/reject leave requests</p>
          <button 
            className="dashboard-button"
            onClick={() => handleNavigation('/attendance')}

          >
            View Attendance
          </button>
        </div>

        {/* Recruitment Card */}
        <div className="dashboard-card">
          <h2>Recruitment</h2>
          <p>Post job openings, manage candidate applications</p>
          <button 
            className="dashboard-button"
            onClick={() => handleNavigation('/recruitment')}

          >
            Post Jobs
          </button>
        </div>

        {/* Performance Management Card */}
        <div className="dashboard-card">
          <h2>Performance Management</h2>
          <p>Set goals, conduct performance reviews</p>
          <button 
            className="dashboard-button"
            onClick={() => handleNavigation('/performance')}

          >
            Start Review
          </button>
        </div>

        {/* Training and Development Card */}
        <div className="dashboard-card">
          <h2>Training & Development</h2>
          <p>Assign training modules, track progress</p>
          <button 
            className="dashboard-button"
            onClick={() => handleNavigation('/training')}

          >
            Assign Training
          </button>
        </div>

        {/* Reports and Analytics Card */}
        <div className="dashboard-card">
          <h2>Reports & Analytics</h2>
          <p>Generate reports on attendance, payroll, recruitment</p>
          <button 
            className="dashboard-button"
            onClick={() => handleNavigation('/reports')}

          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
