// Reports.jsx
import React from 'react';
import ReportCard from '../../components/ReportCard/ReportCard';
import './Reports.css';

const Reports = () => {
  const reports = [
    { id: 1, title: 'Monthly Attendance Report', date: 'October 2023' },
    { id: 2, title: 'Payroll Summary Report', date: 'October 2023' },
  ];

  return (
    <div className="reports">
      <h1>Reports</h1>
      <div className="report-list">
        {reports.map((report) => (
          <ReportCard
            key={report.id}
            title={report.title}
            date={report.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Reports;