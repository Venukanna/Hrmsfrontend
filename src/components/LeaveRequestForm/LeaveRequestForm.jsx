
import React, { useState, useCallback } from 'react';
import './LeaveRequestForm.css';

const LeaveRequestForm = React.memo(() => {
  const [employeeName, setEmployeeName] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      const leaveRequest = {
        employeeName,
        leaveType,
        startDate,
        endDate,
        reason,
        status: 'PENDING',
      };

      try {
        const response = await fetch('http://localhost:1234/api/leave-requests', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(leaveRequest),
        });

        if (response.ok) {
          alert('Leave request submitted successfully!');
          setEmployeeName('');
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
      } finally {
        setIsSubmitting(false);
      }
    },
    [employeeName, leaveType, startDate, endDate, reason]
  );

  return (
    <div className="leave-form-container">
      <div className="leave-form-card">
        <h2 className="form-header">Leave Request Form</h2>
        <form onSubmit={handleSubmit} className="leave-form">
          <div className="form-field">
            <label htmlFor="employeeName">Employee Name</label>
            <input
              id="employeeName"
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="leaveType">Leave Type</label>
            <select
              id="leaveType"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              required
            >
              <option value="">Select leave type</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Vacation">Vacation</option>
              <option value="Personal Leave">Personal Leave</option>
            </select>
          </div>

          <div className="date-fields">
            <div className="form-field">
              <label htmlFor="startDate">Start Date</label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="endDate">End Date</label>
              <input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="reason">Reason</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              placeholder="Briefly explain your reason for leave"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner"></span> Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </button>
        </form>

        {/* Additional information below the form */}
        <div className="additional-info">
          <h3>Leave Policy Information</h3>
          <ul className="policy-list">
            <li>Sick Leave: Up to 10 days per year with doctor's note</li>
            <li>Vacation: Minimum 2 weeks notice required</li>
            <li>Personal Leave: Subject to manager approval</li>
          </ul>
          
          <div className="contact-info">
            <h4>Need Help?</h4>
            <p>Contact HR at <a href="mailto:hr@company.com">hr@company.com</a> or call ext. 1234</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LeaveRequestForm;