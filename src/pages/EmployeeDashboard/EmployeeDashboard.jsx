import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaUserCircle, 
  FaSignOutAlt, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaBell,
  FaSearch,
  FaFileAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaUserClock,
  FaGraduationCap,
  FaFileContract,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
import './EmployeeDashboard.css';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Departments data
  const departments = [
    { name: "Engineering", members: 42, color: "#4361ee" },
    { name: "Marketing", members: 18, color: "#f72585" },
    { name: "Human Resources", members: 12, color: "#4cc9f0" },
    { name: "Finance", members: 9, color: "#4895ef" },
    { name: "Operations", members: 23, color: "#3a0ca3" },
    { name: "Customer Support", members: 15, color: "#7209b7" }
  ];

  // Upcoming events
  const upcomingEvents = [
    { title: "Quarterly Townhall", date: "15 Oct 2023", time: "2:00 PM" },
    { title: "Health & Wellness Workshop", date: "20 Oct 2023", time: "10:00 AM" },
    { title: "Technical Training", date: "25 Oct 2023", time: "9:00 AM" }
  ];

  // Recent documents
  const recentDocuments = [
    { name: "Employee Handbook 2023", date: "12 Sep 2023" },
    { name: "Benefits Guide", date: "5 Sep 2023" },
    { name: "Travel Policy", date: "28 Aug 2023" }
  ];

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="employee-dashboard-modern">
      {/* Glass Sidebar */}
      <div className={`modern-sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="brand-icon">👤</span>
            <span className="brand-text">Employee<span>Portal</span></span>
          </div>
          <button className="sidebar-close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        
        <div className="sidebar-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        
        <nav className="sidebar-nav">
          <button className="nav-item active" onClick={closeSidebar}>
            <RiDashboardFill className="nav-icon" />
            <span>Dashboard</span>
          </button>
          
          <button className="nav-item" onClick={() => { navigate('/employee-profile'); closeSidebar(); }}>
            <FaUserCircle className="nav-icon" />
            <span>My Profile</span>
          </button>
          
          <button className="nav-item" onClick={() => { navigate('/LeaveRequestForm'); closeSidebar(); }}>
            <FaUserClock className="nav-icon" />
            <span>Leave Management</span>
          </button>
          
          <button className="nav-item" onClick={() => { navigate('/attendance-management'); closeSidebar(); }}>
            <FaCalendarAlt className="nav-icon" />
            <span>Attendance</span>
          </button>
          
          <button className="nav-item" onClick={() => { navigate('/payslip'); closeSidebar(); }}>
            <FaMoneyBillWave className="nav-icon" />
            <span>Payslips</span>
          </button>
          
          <button className="nav-item" onClick={() => { navigate('/empTraining'); closeSidebar(); }}>
            <FaGraduationCap className="nav-icon" />
            <span>Training</span>
          </button>
          
          <button className="nav-item" onClick={() => { navigate('/documents'); closeSidebar(); }}>
            <FaFileAlt className="nav-icon" />
            <span>Documents</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Top Navigation Bar */}
        <header className="modern-header">
          <div className="header-left">
            <button className="hamburger-menu" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <h1 className="page-title">Employee Self-Service Portal</h1>
          </div>
          
          <div className="header-actions">
            <div className="notifications">
              <FaBell className="notification-icon" />
              <span className="notification-badge">3</span>
            </div>
            
            <button 
              className="header-btn"
              onClick={() => navigate('/Empabout-us')}
            >
              About Us
            </button>
            <button className="header-btn" onClick={() => navigate('/Empcontact-us')}>

              Contact us
            </button>
            
            <div className="user-profile">
              <FaUserCircle className="user-avatar" />
              <div className="user-info">
                <span className="user-name">John Doe</span>
                <span className="user-role">Software Engineer</span>
              </div>
            </div>
            
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="content-area">
          {/* Welcome Banner */}
          <div className="welcome-banner">
            <div className="welcome-content">
              <h2>Welcome back, Venu</h2>
              <p>Here's what's happening in your account today</p>
            </div>
            <div className="welcome-stats">
              <div className="stat-item">
                <span className="stat-value">5</span>
                <span className="stat-label">Pending Tasks</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">12</span>
                <span className="stat-label">Leave Balance</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">1</span>
                <span className="stat-label">New Messages</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <h2 className="section-title">Quick Actions</h2>
            <div className="actions-grid">
              <button className="action-card" onClick={() => navigate('/employee-profile')}>
                <div className="action-icon">📝</div>
                <h3>Update Profile</h3>
              </button>
              
              <button className="action-card" onClick={() => navigate('/LeaveRequestForm')}>
                <div className="action-icon">🌴</div>
                <h3>Request Leave</h3>
              </button>
              
              <button className="action-card" onClick={() => navigate('/payslip')}>
                <div className="action-icon">💰</div>
                <h3>View Payslip</h3>
              </button>
              
              <button className="action-card" onClick={() => navigate('/empTraining')}>
                <div className="action-icon">🎓</div>
                <h3>Start Training</h3>
              </button>
            </div>
          </div>

          {/* Departments Section */}
          <div className="departments-section">
            <h2 className="section-title">Company Departments</h2>
            <div className="departments-grid">
              {departments.map((dept, index) => (
                <div key={index} className="department-card" style={{ borderLeft: `4px solid ${dept.color}` }}>
                  <h3>{dept.name}</h3>
                  <p>{dept.members} team members</p>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${Math.min(100, dept.members * 3)}%`,
                        backgroundColor: dept.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="upcoming-events">
            <h2 className="section-title">Upcoming Events</h2>
            <div className="events-list">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="event-item">
                  <div className="event-date">
                    <span className="event-day">{event.date.split(' ')[0]}</span>
                    <span className="event-month">{event.date.split(' ')[1]}</span>
                  </div>
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <p>{event.time}</p>
                  </div>
                  <button className="event-action">Add to Calendar</button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Documents */}
          <div className="recent-documents">
            <h2 className="section-title">Recent Documents</h2>
            <div className="documents-list">
              {recentDocuments.map((doc, index) => (
                <div key={index} className="document-item">
                  <FaFileContract className="document-icon" />
                  <div className="document-info">
                    <h3>{doc.name}</h3>
                    <p>Updated: {doc.date}</p>
                  </div>
                  <button className="document-action">Download</button>
                </div>
              ))}
            </div>
          </div>

          {/* About Us Section */}
          <div className="info-section">
            <div className="split-container">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                  alt="Our Team" 
                  className="info-image"
                />
              </div>
              <div className="content-container">
                <h2 className="section-title">About Our Company</h2>
                <div className="divider"></div>
                <p className="section-text">
                  We are a leading technology company with over 10 years of experience 
                  in delivering innovative solutions. Our team of 150+ professionals 
                  is dedicated to excellence and continuous improvement.
                </p>
                <div className="stats-container">
                  <div className="stat-item">
                    <h3>10+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat-item">
                    <h3>150+</h3>
                    <p>Employees</p>
                  </div>
                  <div className="stat-item">
                    <h3>24/7</h3>
                    <p>Support</p>
                  </div>
                </div>
                <button className="modern-button" onClick={() => navigate('/about')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="info-section contact-section">
            <div className="split-container reverse">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                  alt="Contact Us" 
                  className="info-image"
                />
              </div>
              <div className="content-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="divider"></div>
                <div className="contact-info">
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <p>123 Tech Park, Innovation City, CA 90210</p>
                  </div>
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <p>contact@company.com</p>
                  </div>
                </div>
                <button className="modern-button contact-button" onClick={() => navigate('/contact')}>
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
