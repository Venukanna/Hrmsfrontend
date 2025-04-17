import React, { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaChartLine,
  FaFileExport,
  FaSearch
} from 'react-icons/fa';
import './AttendanceManagement.css';

const AttendanceManagement = () => {
  const [activeTab, setActiveTab] = useState('calendar');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample attendance data
  const [attendance, setAttendance] = useState([
    { id: 1, date: '2023-06-01', status: 'Present', checkIn: '09:05', checkOut: '18:15', hours: '8h 10m' },
    { id: 2, date: '2023-06-02', status: 'Present', checkIn: '08:55', checkOut: '17:45', hours: '8h 50m' },
    { id: 3, date: '2023-06-03', status: 'Weekend', checkIn: '-', checkOut: '-', hours: '-' },
    { id: 4, date: '2023-06-04', status: 'Weekend', checkIn: '-', checkOut: '-', hours: '-' },
    { id: 5, date: '2023-06-05', status: 'Present', checkIn: '09:15', checkOut: '18:30', hours: '8h 15m' },
    { id: 6, date: '2023-06-06', status: 'Late', checkIn: '10:30', checkOut: '19:00', hours: '7h 30m' },
    { id: 7, date: '2023-06-07', status: 'Absent', checkIn: '-', checkOut: '-', hours: '-' },
  ]);

  // Leave balance data
  const leaveBalances = [
    { type: 'Annual Leave', total: 20, used: 5, remaining: 15 },
    { type: 'Sick Leave', total: 10, used: 2, remaining: 8 },
    { type: 'Personal Leave', total: 5, used: 1, remaining: 4 },
  ];

  // Filter attendance based on search
  const filteredAttendance = attendance.filter(record => 
    record.date.includes(searchTerm) || 
    record.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="attendance-container">
      <div className="attendance-header">
        <div className="header-content">
          <h1><FaCalendarAlt /> Attendance Management</h1>
          <p>Track your attendance records and manage leave balances</p>
        </div>
        <div className="header-stats">
          <div className="stat-card">
            <div className="stat-icon present">
              <FaCheckCircle />
            </div>
            <div className="stat-info">
              <span className="stat-number">18</span>
              <span className="stat-label">Present Days</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon absent">
              <FaTimesCircle />
            </div>
            <div className="stat-info">
              <span className="stat-number">2</span>
              <span className="stat-label">Absent Days</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon late">
              <FaClock />
            </div>
            <div className="stat-info">
              <span className="stat-number">3</span>
              <span className="stat-label">Late Arrivals</span>
            </div>
          </div>
        </div>
      </div>

      <div className="attendance-tabs">
        <button 
          className={`tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendar')}
        >
          <FaCalendarAlt /> Attendance Calendar
        </button>
        <button 
          className={`tab-btn ${activeTab === 'leaves' ? 'active' : ''}`}
          onClick={() => setActiveTab('leaves')}
        >
          <FaChartLine /> Leave Balances
        </button>
      </div>

      <div className="attendance-content">
        {activeTab === 'calendar' ? (
          <>
            <div className="search-bar">
              <div className="search-input">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by date or status..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="export-btn">
                <FaFileExport /> Export Records
              </button>
            </div>

            <div className="attendance-table">
              <div className="table-header">
                <div className="header-cell">Date</div>
                <div className="header-cell">Status</div>
                <div className="header-cell">Check In</div>
                <div className="header-cell">Check Out</div>
                <div className="header-cell">Hours Worked</div>
              </div>
              <div className="table-body">
                {filteredAttendance.map(record => (
                  <div key={record.id} className={`table-row ${record.status.toLowerCase()}`}>
                    <div className="table-cell">{record.date}</div>
                    <div className="table-cell">
                      <span className={`status-badge ${record.status.toLowerCase()}`}>
                        {record.status}
                      </span>
                    </div>
                    <div className="table-cell">{record.checkIn}</div>
                    <div className="table-cell">{record.checkOut}</div>
                    <div className="table-cell">{record.hours}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="leave-balances">
            <h2><FaChartLine /> Your Leave Balances</h2>
            <div className="leave-cards">
              {leaveBalances.map((leave, index) => (
                <div key={index} className="leave-card">
                  <h3>{leave.type}</h3>
                  <div className="leave-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${(leave.used / leave.total) * 100}%` }}
                      ></div>
                    </div>
                    <div className="leave-stats">
                      <span>Used: {leave.used} days</span>
                      <span>Remaining: {leave.remaining} days</span>
                    </div>
                  </div>
                  <button className="request-btn">Request Leave</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceManagement;