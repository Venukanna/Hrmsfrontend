import React, { useState } from 'react';
import { 
  FaFileInvoiceDollar, 
  FaCalendarAlt, 
  FaDownload, 
  FaPrint, 
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaBuilding,
  FaIdCard,
  FaMoneyBillWave
} from 'react-icons/fa';
import './Payslip.css';

const Payslip = () => {
  const [selectedMonth, setSelectedMonth] = useState('June 2023');
  const [expandedEarnings, setExpandedEarnings] = useState(true);
  const [expandedDeductions, setExpandedDeductions] = useState(true);

  // Sample payslip data
  const payslips = [
    { id: 1, month: 'June 2023', date: '2023-06-30', amount: '$4,850.00', status: 'Paid' },
    { id: 2, month: 'May 2023', date: '2023-05-31', amount: '$4,850.00', status: 'Paid' },
    { id: 3, month: 'April 2023', date: '2023-04-30', amount: '$4,850.00', status: 'Paid' },
    { id: 4, month: 'March 2023', date: '2023-03-31', amount: '$4,850.00', status: 'Paid' },
  ];

  // Sample earnings and deductions
  const earnings = [
    { name: 'Basic Salary', amount: '$4,000.00' },
    { name: 'Housing Allowance', amount: '$500.00' },
    { name: 'Transport Allowance', amount: '$300.00' },
    { name: 'Performance Bonus', amount: '$50.00' },
  ];

  const deductions = [
    { name: 'Federal Tax', amount: '$800.00' },
    { name: 'State Tax', amount: '$200.00' },
    { name: 'Social Security', amount: '$300.00' },
    { name: 'Health Insurance', amount: '$150.00' },
  ];

  const selectedPayslip = payslips.find(p => p.month === selectedMonth);

  return (
    <div className="payslip-container">
      <div className="payslip-header">
        <div className="header-content">
          <h1><FaFileInvoiceDollar /> Payslip</h1>
          <p>View and download your payment history and details</p>
        </div>
      </div>

      <div className="payslip-content">
        <div className="payslip-selector">
          <div className="selector-card">
            <h2><FaCalendarAlt /> Select Payslip</h2>
            <div className="payslip-list">
              {payslips.map(payslip => (
                <div 
                  key={payslip.id} 
                  className={`payslip-item ${selectedMonth === payslip.month ? 'active' : ''}`}
                  onClick={() => setSelectedMonth(payslip.month)}
                >
                  <div className="payslip-month">{payslip.month}</div>
                  <div className="payslip-amount">{payslip.amount}</div>
                  <div className={`payslip-status ${payslip.status.toLowerCase()}`}>
                    {payslip.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="payslip-actions">
            <button className="action-btn download">
              <FaDownload /> Download PDF
            </button>
            <button className="action-btn print">
              <FaPrint /> Print
            </button>
            <button className="action-btn email">
              <FaEnvelope /> Email
            </button>
          </div>
        </div>

        {selectedPayslip && (
          <div className="payslip-details">
            <div className="payslip-summary">
              <div className="summary-header">
                <h2>Payslip for {selectedPayslip.month}</h2>
                <div className="summary-date">Issued: {selectedPayslip.date}</div>
              </div>

              <div className="employee-info">
                <div className="info-item">
                  <div className="info-label"><FaBuilding /> Company</div>
                  <div className="info-value">TechSolutions Inc.</div>
                </div>
                <div className="info-item">
                  <div className="info-label"><FaIdCard /> Employee ID</div>
                  <div className="info-value">EMP-2023-0456</div>
                </div>
                {/* <div className="info-item">
                  <div className="info-label"><FaUser /> Employee Name</div>
                  <div className="info-value">Alex Johnson</div>
                </div> */}
                <div className="info-item">
                  <div className="info-label"><FaMoneyBillWave /> Net Pay</div>
                  <div className="info-value net-pay">{selectedPayslip.amount}</div>
                </div>
              </div>
            </div>

            <div className="payslip-breakdown">
              <div className="breakdown-section">
                <div 
                  className="section-header" 
                  onClick={() => setExpandedEarnings(!expandedEarnings)}
                >
                  <h3>Earnings</h3>
                  <div className="toggle-icon">
                    {expandedEarnings ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                {expandedEarnings && (
                  <div className="section-content">
                    <div className="breakdown-table">
                      <div className="table-header">
                        <div className="header-cell">Description</div>
                        <div className="header-cell">Amount</div>
                      </div>
                      <div className="table-body">
                        {earnings.map((item, index) => (
                          <div key={index} className="table-row">
                            <div className="table-cell">{item.name}</div>
                            <div className="table-cell">{item.amount}</div>
                          </div>
                        ))}
                        <div className="table-row total">
                          <div className="table-cell">Total Earnings</div>
                          <div className="table-cell">$4,850.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="breakdown-section">
                <div 
                  className="section-header" 
                  onClick={() => setExpandedDeductions(!expandedDeductions)}
                >
                  <h3>Deductions</h3>
                  <div className="toggle-icon">
                    {expandedDeductions ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                {expandedDeductions && (
                  <div className="section-content">
                    <div className="breakdown-table">
                      <div className="table-header">
                        <div className="header-cell">Description</div>
                        <div className="header-cell">Amount</div>
                      </div>
                      <div className="table-body">
                        {deductions.map((item, index) => (
                          <div key={index} className="table-row">
                            <div className="table-cell">{item.name}</div>
                            <div className="table-cell">{item.amount}</div>
                          </div>
                        ))}
                        <div className="table-row total">
                          <div className="table-cell">Total Deductions</div>
                          <div className="table-cell">$1,450.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="payslip-total">
                <div className="total-row">
                  <div className="total-label">Gross Pay</div>
                  <div className="total-value">$4,850.00</div>
                </div>
                <div className="total-row">
                  <div className="total-label">Total Deductions</div>
                  <div className="total-value">$1,450.00</div>
                </div>
                <div className="total-row net-total">
                  <div className="total-label">Net Pay</div>
                  <div className="total-value">{selectedPayslip.amount}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payslip;