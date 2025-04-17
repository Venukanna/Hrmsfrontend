// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUserCircle, FaSignOutAlt, FaBars } from 'react-icons/fa';
// import './HRheader.css';

// const HRDashboard = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   return (
//     <div className="hr-dashboard">
//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
//         <div className="sidebar-header">
//           <div className="sidebar-brand">
//             <span className="brand-icon">💼</span>
//             <span className="brand-text">HR<span>Pro</span></span>
//           </div>
//           <button className="sidebar-close-btn" onClick={toggleSidebar}>
//             &times;
//           </button>
//         </div>
        
//         <nav className="sidebar-nav">
//           <button className="nav-item" onClick={() => { navigate('/dashboard'); closeSidebar(); }}>
//             Dashboard
//           </button>
//           <button className="nav-item" onClick={() => { navigate('/employees'); closeSidebar(); }}>
//             Employees
//           </button>
//           <button className="nav-item" onClick={() => { navigate('/payroll'); closeSidebar(); }}>
//             Payroll
//           </button>
//         </nav>
//       </div>

//       {/* Main Content with Fixed Header */}
//       <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
//         {/* Fixed Header */}
//         <header className="fixed-header">
//           <div className="header-left">
//             <button className="hamburger-menu" onClick={toggleSidebar}>
//               <FaBars />
//             </button>
//             <h1>Employee Self-Service Portal</h1>
//           </div>
          
//           <div className="header-right">
//             <button className="header-btn" onClick={() => navigate('/about')}>
//               About Us
//             </button>
//             <button className="header-btn" onClick={() => navigate('/contact')}>
//               Contact
//             </button>

//             <div className="user-profile">
//               <FaUserCircle className="user-avatar" />
//               <div className="user-info">
//                 <span className="user-name">John Doe</span>
//                 <span className="user-role">Software Engineer</span>
//               </div>
//             </div>
//             <button className="logout-btn" onClick={() => navigate('/login')}>
//               <FaSignOutAlt />
//             </button>
//           </div>
//         </header>

//         {/* Scrollable Content */}
//         <div className="content-area">
//           {/* Your dashboard content goes here */}
//           <div className="welcome-section">
//             <h2>Welcome to your dashboard</h2>
//             <p>Select an option from the sidebar to get started</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HRDashboard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext'; // Update path as needed
import './HRheader.css';

const HRDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeSidebar();
  };

  // Admin-only navigation items
  const adminNavItems = [
    { path: '/hr-dashboard', label: 'Dashboard' },
    { path: '/employee-management', label: 'Employees' },
    { path: '/payroll', label: 'Payroll' },
    { path: '/recruitment', label: 'Recruitment' },
    { path: '/performance', label: 'Performance' },
    { path: '/attendance-management', label: 'Attendance' },
    { path: '/leave-management', label: 'Leave Management' },
    { path: '/reports', label: 'Reports' }
  ];

  // Common navigation items for all roles
  const commonNavItems = [
    { path: '/employee-profile', label: 'My Profile' },
    { path: '/documents', label: 'Documents' },
    { path: '/about-us', label: 'About Us' },
    { path: '/contact-us', label: 'Contact Us' }
  ];

  // Combine navigation items based on role
  const navItems = [
    ...(user?.role === 'admin' ? adminNavItems : []),
    ...commonNavItems
  ];

  return (
    <div className="hr-dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="brand-icon">💼</span>
            <span className="brand-text">HR<span>Pro</span></span>
          </div>
          <button className="sidebar-close-btn" onClick={toggleSidebar}>
            &times;
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button 
              key={item.path}
              className="nav-item" 
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content with Fixed Header */}
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Fixed Header */}
        <header className="fixed-header">
          <div className="header-left">
            <button className="hamburger-menu" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <h1>{user?.role === 'admin' ? 'HR Dashboard' : 'Employee Dashboard'}</h1>
          </div>
          
          <div className="header-right">
            <div className="user-profile">
              <FaUserCircle className="user-avatar" />
              <div className="user-info">
                <span className="user-name">{user?.username || 'User'}</span>
                <span className="user-role">
                  {user?.role === 'admin' ? 'HR Manager' : 'Employee'}
                </span>
              </div>
            </div>
            <button 
              className="logout-btn" 
              onClick={handleLogout}
              title="Logout"
            >
              <FaSignOutAlt />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="content-area">
          <div className="welcome-section">
            <h2>Welcome {user?.username || 'User'}!</h2>
            <p>
              {user?.role === 'admin' 
                ? 'Manage your HR activities from the sidebar'
                : 'Access your employee services from the sidebar'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;