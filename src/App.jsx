
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import EmployeeProfile from './pages/EmployeeProfile/EmployeeProfile';
import Navbar from './components/Navbar/Navbar';
import HRDashboard from './pages/HRDashboard/HRDashboard';
import EmployeeManagement from './pages/EmployeeManagement/EmployeeManagement';
import EmployeeDashboard from './pages/EmployeeDashboard/EmployeeDashboard';
import Recruitment from './pages/Recruitment/Recruitment';
import Performance from './pages/Performance/Performance';
import Training from './pages/Training/Training';
import Reports from './pages/Reports/Reports';
import Payroll from './pages/Payroll/Payroll';
import Attendance from './pages/HrAttendance/Attendance.jsx';
import Payslip from './pages/Payslip/Payslip';
import LeaveManagement from './pages/LeaveManagement/LeaveManagement';
import AttendanceManagement from './pages/AttendanceManagement/AttendanceManagement';
import Documents from './pages/Documents/Documents';
import Emptraining from './pages/Emptraining/empTraining';
import LeaveRequestForm from './components/LeaveRequestForm/LeaveRequestForm';
import AboutUs from './components/AboutUs/AboutUs';
import Contactus from './components/ContactUs/ContactUs';
import EmpAboutUs from './components/EmpAboutUs/AboutUs';
import EmpContactUs from './components/EmpContactUs/ContactUs';
import LoginForm from './pages/Login/LoginForm';
import Unauthorized from './pages/Unauthorized/Unauthorized'; // You'll need to create this

import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar />
          <div className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<LoginForm />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<Contactus />} />
              <Route path="/empabout-us" element={<EmpAboutUs />} />
              <Route path="/empcontact-us" element={<EmpContactUs />} />

              {/* HR/Admin Protected Routes */}
              <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                <Route path="/" element={<Navigate to="/admin/dashboard" />} />
                <Route path="/admin/dashboard" element={<><HRDashboard /><Footer /></>} />
                <Route path="/employee-management" element={<EmployeeManagement />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/training" element={<Training />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/payroll" element={<Payroll />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/leave-management" element={<LeaveManagement />} />
                <Route path="/attendance-management" element={<AttendanceManagement />} />
              </Route>

              {/* Employee Protected Routes */}
              <Route element={<ProtectedRoute allowedRoles={['employee']} />}>
                <Route path="/employee/dashboard" element={<><EmployeeDashboard /><Footer /></>} />
                <Route path="/employee-profile" element={<EmployeeProfile />} />
                <Route path="/payslip" element={<Payslip />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/emptraining" element={<Emptraining />} />
                <Route path="/LeaveRequestform" element={<LeaveRequestForm />} />
              </Route>

              {/* Common Protected Routes (accessible to both roles) */}
              <Route element={<ProtectedRoute allowedRoles={['admin', 'employee']} />}>
                {/* Add any routes that both roles can access here */}
              </Route>

              {/* Catch-all route for undefined paths */}
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;