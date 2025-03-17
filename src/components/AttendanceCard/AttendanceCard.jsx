import React from 'react';
import './AttendanceCard.css';

const AttendanceCard = React.memo(({ employee, date, status }) => {
  return (
    <div className="attendance-card">
      <h3>{employee}</h3>
      <p>Date: {date}</p>
      <p>Status: {status}</p>
    </div>
  );
});

export default AttendanceCard;
