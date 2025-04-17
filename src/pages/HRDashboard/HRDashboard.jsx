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
  FaChartLine,
  FaUserFriends,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaUserPlus,
  FaClipboardCheck,
  FaGraduationCap,
  FaFileAlt,
  FaBars,
  FaTimes,
  FaRegSmile,
  FaRocket
} from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
import './HRDashboard.css';

const HRDashboard = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New leave request from Sarah', time: '10 min ago', read: false },
    { id: 2, text: 'Payroll processed successfully', time: '1 hour ago', read: false },
    { id: 3, text: '3 new job applications received', time: '2 hours ago', read: true }
  ]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/login');
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? {...n, read: true} : n
    ));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="hr-dashboard-modern">
      {/* Glass Morphism Sidebar */}
      <div className={`modern-sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="brand-icon">💼</span>
            <span className="brand-text">HR<span>Pro</span></span>
          </div>
          <button className="sidebar-close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        
        <div className="sidebar-search">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => { setActiveTab('dashboard'); closeSidebar(); }}
          >
            <RiDashboardFill className="nav-icon" />
            <span>Dashboard</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'employees' ? 'active' : ''}`}
            onClick={() => { setActiveTab('employees'); handleNavigation('/employee-management'); }}
          >
            <FaUserFriends className="nav-icon" />
            <span>Employees</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'payroll' ? 'active' : ''}`}
            onClick={() => { setActiveTab('payroll'); handleNavigation('/payroll'); }}
          >
            <FaMoneyBillWave className="nav-icon" />
            <span>Payroll</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'attendance' ? 'active' : ''}`}
            onClick={() => { setActiveTab('attendance'); handleNavigation('/attendance'); }}
          >
            <FaCalendarAlt className="nav-icon" />
            <span>Attendance</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'recruitment' ? 'active' : ''}`}
            onClick={() => { setActiveTab('recruitment'); handleNavigation('/recruitment'); }}
          >
            <FaUserPlus className="nav-icon" />
            <span>Recruitment</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'performance' ? 'active' : ''}`}
            onClick={() => { setActiveTab('performance'); handleNavigation('/performance'); }}
          >
            <FaClipboardCheck className="nav-icon" />
            <span>Performance</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'training' ? 'active' : ''}`}
            onClick={() => { setActiveTab('training'); handleNavigation('/training'); }}
          >
            <FaGraduationCap className="nav-icon" />
            <span>Training</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => { setActiveTab('reports'); handleNavigation('/reports'); }}
          >
            <FaChartLine className="nav-icon" />
            <span>Reports</span>
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Top Navigation Bar */}
        <header className="modern-header">
          <div className="header-left">
            <button className="hamburger-menu" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <h1 className="page-title">
              {activeTab === 'dashboard' && 'HR Dashboard'}
              {activeTab === 'employees' && 'Employee Management'}
              {activeTab === 'payroll' && 'Payroll Management'}
              {activeTab === 'attendance' && 'Attendance Tracking'}
              {activeTab === 'recruitment' && 'Recruitment'}
              {activeTab === 'performance' && 'Performance Management'}
              {activeTab === 'training' && 'Training & Development'}
              {activeTab === 'reports' && 'Reports & Analytics'}
            </h1>
          </div>
          
          <div className="header-actions">
            <div className="notifications">
              <FaBell className="notification-icon" />
              {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
              <div className="notification-dropdown">
                <h3>Notifications ({unreadCount} new)</h3>
                {notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`notification-item ${notification.read ? '' : 'unread'}`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <p>{notification.text}</p>
                    <span>{notification.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="header-btn"
              onClick={() => handleNavigation('/about-us')}
            >
              About Us

            </button>
            <button 
              className="header-btn"
              onClick={() => handleNavigation('/contact-us')}
            >
              Contact
            </button>

            <div className="user-profile">
              <FaUserCircle className="user-avatar" />
              <div className="user-info">
                <span className="user-name">Admin</span>
                <span className="user-role">HR Manager</span>
              </div>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="content-area">
          {activeTab === 'dashboard' && (
            <>
              {/* Welcome Banner */}
              <div className="welcome-banner">
                <div className="welcome-content">
                  <h2>Welcome back, Admin! <FaRegSmile /></h2>
                  <p>Here's what's happening in your HR dashboard today</p>
                </div>
                <div className="welcome-image">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                    alt="HR Team Collaboration" 
                  />
                </div>
              </div>

              {/* Stats Overview */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-content">
                    <h3>Total Employees</h3>
                    <p>247</p>
                    <span className="stat-trend up">↑ 12% from last month</span>
                  </div>
                  <div className="stat-icon">
                    <FaUserFriends />
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-content">
                    <h3>Active Recruitments</h3>
                    <p>14</p>
                    <span className="stat-trend up">↑ 5 new this week</span>
                  </div>
                  <div className="stat-icon">
                    <FaUserPlus />
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-content">
                    <h3>Pending Approvals</h3>
                    <p>8</p>
                    <span className="stat-trend down">↓ 3 resolved today</span>
                  </div>
                  <div className="stat-icon">
                    <FaClipboardCheck />
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-content">
                    <h3>Upcoming Trainings</h3>
                    <p>5</p>
                    <span className="stat-trend">Starts next week</span>
                  </div>
                  <div className="stat-icon">
                    <FaGraduationCap />
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="quick-actions">
                <h2 className="section-title">Quick Actions <FaRocket /></h2>
                <div className="actions-grid">
                <button 
                  className="action-card"
                   onClick={() => {
                     setActiveTab('employees');
                          handleNavigation('/employee-management');
                          }}
                          >
                         <div className="action-icon">➕</div>
                           <h3>Add New Employee</h3>
                           </button>
                  
                  <button 
                    className="action-card"
                    onClick={() => handleNavigation('/payroll/run')}
                  >
                    <div className="action-icon">💰</div>
                    <h3>Run Payroll</h3>
                  </button>
                  
                  <button 
                    className="action-card"
                    onClick={() => handleNavigation('/attendance/approve')}
                  >
                    <div className="action-icon">✅</div>
                    <h3>Approve Leaves</h3>
                  </button>
                  
                  <button 
                    className="action-card"
                    onClick={() => handleNavigation('/recruitment/post')}
                  >
                    <div className="action-icon">📢</div>
                    <h3>Post New Job</h3>
                  </button>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="recent-activity">
                <h2 className="section-title">Recent Activity</h2>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">👤</div>
                    <div className="activity-content">
                      <p><strong>John Doe</strong> joined the company as <strong>UX Designer</strong></p>
                      <span className="activity-time">2 hours ago</span>
                    </div>
                  </div>
                  
                  <div className="activity-item">
                    <div className="activity-icon">📝</div>
                    <div className="activity-content">
                      <p><strong>Monthly payroll</strong> was processed for <strong>247 employees</strong></p>
                      <span className="activity-time">1 day ago</span>
                    </div>
                  </div>
                  
                  <div className="activity-item">
                    <div className="activity-icon">🎓</div>
                    <div className="activity-content">
                      <p><strong>Leadership Training</strong> was completed by <strong>24 employees</strong></p>
                      <span className="activity-time">2 days ago</span>
                    </div>
                  </div>
                  
                  <div className="activity-item">
                    <div className="activity-icon">📊</div>
                    <div className="activity-content">
                      <p><strong>Q2 Performance Reviews</strong> have been initiated</p>
                      <span className="activity-time">3 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {/* About Section */}
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
                <h2 className="section-title">About HRPro</h2>
                <div className="divider"></div>
                
                <p className="section-text">
                  HRPro is a leading HR management solution provider with over 10 years of experience 
                  in transforming workplace operations. Our platform serves 1,000+ companies worldwide, 
                  helping them streamline HR processes and enhance employee experiences.
                </p>
                <div className="stats-container">
                  <div className="stat-item">
                    <h3>10+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat-item">
                    <h3>1K+</h3>
                    <p>Global Clients</p>
                  </div>
                  <div className="stat-item">
                    <h3>24/7</h3>
                    <p>Support</p>
                  </div>
                </div>
                <button 
                  className="modern-button"
                  onClick={() => handleNavigation('/about')}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Contact Section */}
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
                <h2 className="section-title">Contact Our Team</h2>
                <div className="divider"></div>
                <div className="contact-info">
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <p>123 HR Avenue, Tech City, CA 90210</p>
                  </div>
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <p>contact@hrpro.com</p>
                  </div>
                </div>
                <button 
                  className="modern-button contact-button"
                  onClick={() => handleNavigation('/contact')}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
