import React, { useState, useEffect } from 'react';
import './attendance.css'; // Ensure this file exists in the same directory

const Attendance = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await fetch('https://hrmsbackend-ci5t.onrender.com/api/leave-requests', {
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setLeaveRequests(data);
        } else {
          const errorData = await response.json();
          setError(`Failed to fetch leave requests: ${errorData.message || 'Unknown error'}`);
        }
      } catch (error) {
        setError(`Error fetching leave requests: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveRequests();
  }, []);

  if (loading) {
    return <div className="loading">Loading leave requests...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="attendance-container">
      <h2>Leave Requests Management</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.employeeName}</td>
              <td>{request.leaveType}</td>
              <td>{new Date(request.startDate).toLocaleDateString()}</td>
              <td>{new Date(request.endDate).toLocaleDateString()}</td>
              <td>{request.reason}</td>
              <td>
                <span className={`status-badge status-${request.status.toLowerCase()}`}>
                  {request.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
