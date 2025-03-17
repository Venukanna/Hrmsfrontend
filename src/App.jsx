import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EmployeeProfile from './pages/EmployeeProfile/EmployeeProfile';
import Navbar from './components/Navbar/Navbar';
import HRDashboard from './pages/HRDashboard/HRDashboard';
import EmployeeManagement from './pages/EmployeeManagement/EmployeeManagement'; // New import
import EmployeeDashboard from './pages/EmployeeDashboard/EmployeeDashboard';
import Recruitment from './pages/Recruitment/Recruitment'; // New import for Recruitment
import Performance from './pages/Performance/Performance'; // New import for Performance
import Training from './pages/Training/Training'; // New import for Training
import Reports from './pages/Reports/Reports'; // New import for Reports
import Payroll from './pages/Payroll/Payroll';
import Attendance from './pages/HrAttendance/Attendance';
import Payslip from './pages/Payslip/Payslip'; // New import for Payslip
import LeaveManagement from './pages/LeaveManagement/LeaveManagement';
import AttendanceManagement from './pages/AttendanceManagement/AttendanceManagement'; // New import for Attendance Management
import Documents from './pages/Documents/Documents';
import Emptraining from './pages/Emptraining/Emptraining'; // New import for Emptraining
import LeaveRequestForm from './components/LeaveRequestForm/LeaveRequestForm';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/hr-dashboard" />} />
            <Route path="/hr-dashboard" element={<><HRDashboard /><Footer /></>} />
            <Route path="/employee-dashboard" element={<><EmployeeDashboard /><Footer /></>} />
            <Route path="/employee-profile" element={<EmployeeProfile />} /> {/* New route for Employee Profile */}
            <Route path="/employee-management" element={<EmployeeManagement />} /> {/* New route */}
            <Route path="/leave-management" element={<LeaveManagement />} />

            <Route path="/attendance-management" element={<AttendanceManagement />} /> {/* New route for Attendance Management */}
            <Route path="/LeaveRequestform" element={<LeaveRequestForm/>} />
            <Route path="/payroll" element={<Payroll />} /> 
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/payslip" element={<Payslip />} /> {/* New route for Payslip */}
            <Route path="/documents" element={<Documents />} />
            <Route path="/Emptraining" element={<Emptraining />} /> {/* New route for Emptraining */}

            <Route path="/recruitment" element={<Recruitment />} /> {/* New route for Recruitment */}
            <Route path="/performance" element={<Performance />} /> {/* New route for Performance */}
            <Route path="/training" element={<Training />} /> {/* New route for Training */}
            <Route path="/reports" element={<Reports />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
