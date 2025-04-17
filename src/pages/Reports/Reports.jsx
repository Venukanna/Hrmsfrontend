import React from 'react';
import { FaFilePdf, FaFileCsv, FaDownload, FaSearch, FaFilter } from 'react-icons/fa';
import './Reports.css';

const Reports = () => {
  const reports = [
    { 
      id: 1, 
      title: 'Monthly Attendance Report', 
      date: 'Oct 2023',
      type: 'PDF',
      status: 'Generated',
      downloads: 24,
      size: '2.4 MB'
    },
    { 
      id: 2, 
      title: 'Payroll Summary Report', 
      date: 'Oct 2023',
      type: 'CSV',
      status: 'Pending',
      downloads: 18,
      size: '1.8 MB'
    },
    { 
      id: 3, 
      title: 'Employee Performance Review', 
      date: 'Q3 2023',
      type: 'PDF',
      status: 'Archived',
      downloads: 42,
      size: '3.1 MB'
    },
    { 
      id: 4, 
      title: 'Recruitment Metrics', 
      date: 'Sep 2023',
      type: 'CSV',
      status: 'Generated',
      downloads: 15,
      size: '1.2 MB'
    },
  ];

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h1><FaFilePdf /> Reports Dashboard</h1>
        <div className="reports-controls">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search reports..." />
          </div>
          <div className="filter-options">
            <button className="filter-btn active"><FaFilter /> All</button>
            <button className="filter-btn"><FaFilePdf /> PDF</button>
            <button className="filter-btn"><FaFileCsv /> CSV</button>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Reports</h3>
          <p>127</p>
          <span className="stat-trend up">↑ 8% from last month</span>
        </div>
        <div className="stat-card">
          <h3>Recent Downloads</h3>
          <p>642</p>
          <span className="stat-trend down">↓ 3% weekly</span>
        </div>
        <div className="stat-card">
          <h3>Storage Used</h3>
          <p>84 GB</p>
          <span className="stat-trend">2.1 GB/report</span>
        </div>
      </div>

      <div className="reports-grid">
        {reports.map((report) => (
          <div key={report.id} className="report-card glassmorphism">
            <div className="card-header">
              <div className={`file-type ${report.type.toLowerCase()}`}>
                {report.type === 'PDF' ? <FaFilePdf /> : <FaFileCsv />}
              </div>
              <span className={`status-badge ${report.status.toLowerCase()}`}>
                {report.status}
              </span>
            </div>
            <h3>{report.title}</h3>
            <div className="card-meta">
              <div className="meta-item">
                <span>Generated</span>
                <p>{report.date}</p>
              </div>
              <div className="meta-item">
                <span>Downloads</span>
                <p>{report.downloads}</p>
              </div>
              <div className="meta-item">
                <span>Size</span>
                <p>{report.size}</p>
              </div>
            </div>
            <button className="download-btn">
              <FaDownload /> Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;