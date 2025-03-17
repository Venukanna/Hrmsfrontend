// ReportCard.jsx
import React from 'react';
import './ReportCard.css';

const ReportCard = ({ title, date }) => {
  return (
    <div className="report-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <button>Download</button>
    </div>
  );
};

export default ReportCard;