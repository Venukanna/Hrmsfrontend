// // Attendance.jsx
// import React from 'react';
// import AttendanceCard from '../../components/AttendanceCard/AttendanceCard';
// import './Attendance.css';

// const Attendance = () => {
//   const attendanceData = [
//     { id: 1, employee: 'John Doe', date: '2023-10-01', status: 'Present' },
//     { id: 2, employee: 'Jane Smith', date: '2023-10-01', status: 'Absent' },
//   ];

//   return (
//     <div className="attendance">
//       <h1>Attendance</h1>
//       <div className="attendance-list">
//         {attendanceData.map((record) => (
//           <AttendanceCard
//             key={record.id}
//             employee={record.employee}
//             date={record.date}
//             status={record.status}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Attendance;


// 

// import React, { useState, useEffect } from 'react';
// import './attendance.css';

// const HRDashboard = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await fetch('http://localhost:1234/api/leave-requests', {
//           credentials: 'include', // Include if using cookies
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setLeaveRequests(data);
//         } else {
//           const errorData = await response.json();
//           setError(`Failed to fetch leave requests: ${errorData.message || 'Unknown error'}`);
//         }
//       } catch (error) {
//         setError(`Error fetching leave requests: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLeaveRequests();
//   }, []);

//   if (loading) {
//     return <div>Loading leave requests...</div>;
//   }

//   if (error) {
//     return <div style={{ color: 'red' }}>{error}</div>;
//   }

//   return (
//     <div className="hr-dashboard">
//       <h2>HR Dashboard - Leave Requests</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Leave Type</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Reason</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaveRequests.map((request) => (
//             <tr key={request.id}>
//               <td>{request.employeeName}</td>
//               <td>{request.leaveType}</td>
//               <td>{request.startDate}</td>
//               <td>{request.endDate}</td>
//               <td>{request.reason}</td>
//               <td>{request.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HRDashboard;


import React, { useState, useEffect } from 'react';
import './attendance.css'; // Ensure this CSS file is imported

const HRDashboard = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await fetch('http://localhost:1234/api/leave-requests', {
          credentials: 'include', // Include if using cookies
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
    <div className="hr-dashboard">
      <h2>HR Dashboard - Leave Requests</h2>
      <table>
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
              <td>{request.startDate}</td>
              <td>{request.endDate}</td>
              <td>{request.reason}</td>
              {/* Updated Status Cell */}
              <td>
                <span className="status" data-status={request.status}>
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

export default HRDashboard;