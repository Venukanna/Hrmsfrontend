// import React, { useState, useCallback } from 'react';
// import './LeaveRequestForm.css';

// const LeaveRequestForm = React.memo(() => {
//   const [leaveType, setLeaveType] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [reason, setReason] = useState('');

//   const handleSubmit = useCallback((e) => {
//     e.preventDefault();
//     console.log({ leaveType, startDate, endDate, reason });
//     alert('Leave request submitted!');
//   }, [leaveType, startDate, endDate, reason]);

//   return (
//     <div className="leave-request-form">
//       <h2>Leave Request Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Leave Type:
//           <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} required>
//             <option value="">Select</option>
//             <option value="sick">Sick Leave</option>
//             <option value="vacation">Vacation</option>
//             <option value="personal">Personal Leave</option>
//           </select>
//         </label>
//         <label>
//           Start Date:
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           End Date:
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Reason:
//           <textarea
//             value={reason}
//             onChange={(e) => setReason(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// });

// export default LeaveRequestForm;

// import React, { useState, useCallback } from 'react';
// import './LeaveRequestForm.css';

// const LeaveRequestForm = React.memo(() => {
//   const [leaveType, setLeaveType] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [reason, setReason] = useState('');

//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();

//       const leaveRequest = {
//         employeeName: 'John Doe', // Replace with dynamic employee name (e.g., from auth)
//         leaveType,
//         startDate,
//         endDate,
//         reason,
//         status: 'PENDING', // Default status
//       };

//       try {
//         const response = await fetch('http://localhost:1234/api/leave-requests', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(leaveRequest),
//         });

//         if (response.ok) {
//           alert('Leave request submitted successfully!');
//           setLeaveType('');
//           setStartDate('');
//           setEndDate('');
//           setReason('');
//         } else {
//           alert('Failed to submit leave request.');
//         }
//       } catch (error) {
//         console.error('Error submitting leave request:', error);
//         alert('An error occurred. Please try again.');
//       }
//     },
//     [leaveType, startDate, endDate, reason]
//   );

//   return (
//     <div className="leave-request-form">
//       <h2>Leave Request Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Leave Type:
//           <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} required>
//             <option value="">Select</option>
//             <option value="Sick Leave">Sick Leave</option>
//             <option value="Vacation">Vacation</option>
//             <option value="Personal Leave">Personal Leave</option>
//           </select>
//         </label>
//         <label>
//           Start Date:
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           End Date:
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Reason:
//           <textarea
//             value={reason}
//             onChange={(e) => setReason(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// });

// export default LeaveRequestForm;

// import React, { useState, useCallback } from 'react';
// import './LeaveRequestForm.css';

// const LeaveRequestForm = React.memo(() => {
//   const [leaveType, setLeaveType] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [reason, setReason] = useState('');

//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();

//       const leaveRequest = {
//         employeeName: 'John Doe', // Replace with dynamic employee name (e.g., from auth)
//         leaveType,
//         startDate,
//         endDate,
//         reason,
//         status: 'PENDING', // Default status
//       };

//       try {
//         const response = await fetch('http://localhost:1234/api/leave-requests', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           credentials: 'include', // Include if using cookies
//           body: JSON.stringify(leaveRequest),
//         });

//         if (response.ok) {
//           alert('Leave request submitted successfully!');
//           setLeaveType('');
//           setStartDate('');
//           setEndDate('');
//           setReason('');
//         } else {
//           const errorData = await response.json();
//           alert(`Failed to submit leave request: ${errorData.message || 'Unknown error'}`);
//         }
//       } catch (error) {
//         console.error('Error submitting leave request:', error);
//         alert('An error occurred. Please try again.');
//       }
//     },
//     [leaveType, startDate, endDate, reason]
//   );

//   return (
//     <div className="leave-request-form">
//       <h2>Leave Request Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Leave Type:
//           <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} required>
//             <option value="">Select</option>
//             <option value="Sick Leave">Sick Leave</option>
//             <option value="Vacation">Vacation</option>
//             <option value="Personal Leave">Personal Leave</option>
//           </select>
//         </label>
//         <label>
//           Start Date:
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           End Date:
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Reason:
//           <textarea
//             value={reason}
//             onChange={(e) => setReason(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// });

// export default LeaveRequestForm;

import React, { useState, useCallback } from 'react';
import './LeaveRequestForm.css';

const LeaveRequestForm = React.memo(() => {
  const [employeeName, setEmployeeName] = useState(''); // State for employee name
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const leaveRequest = {
        employeeName, // Dynamic employee name
        leaveType,
        startDate,
        endDate,
        reason,
        status: 'PENDING', // Default status
      };

      try {
        const response = await fetch('http://localhost:1234/api/leave-requests', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include if using cookies
          body: JSON.stringify(leaveRequest),
        });

        if (response.ok) {
          alert('Leave request submitted successfully!');
          setEmployeeName(''); // Reset employee name
          setLeaveType('');
          setStartDate('');
          setEndDate('');
          setReason('');
        } else {
          const errorData = await response.json();
          alert(`Failed to submit leave request: ${errorData.message || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error submitting leave request:', error);
        alert('An error occurred. Please try again.');
      }
    },
    [employeeName, leaveType, startDate, endDate, reason]
  );

  return (
    <div className="leave-request-form">
      <h2>Leave Request Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Employee Name:
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </label>
        <label>
          Leave Type:
          <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} required>
            <option value="">Select</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Vacation">Vacation</option>
            <option value="Personal Leave">Personal Leave</option>
          </select>
        </label>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <label>
          Reason:
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
});

export default LeaveRequestForm;
