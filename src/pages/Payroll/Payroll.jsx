import React, { useState } from 'react';
import { FaMoneyBillWave, FaPaperPlane, FaPlus, FaSearch } from 'react-icons/fa';
import './Payroll.css';

const PayrollSummary = React.memo(() => {
  const [paymentForm, setPaymentForm] = useState({
    employee: '',
    amount: '',
    bankAccount: '',
    phoneNumber: '',
    role: '',
  });

  const [payrollData, setPayrollData] = useState([
    { id: 1, employee: 'John Doe', amount: '$5000', status: 'Paid', bankAccount: '•••• 6789', phoneNumber: '(123) 456-7890', role: 'Manager', date: '2023-05-15' },
    { id: 2, employee: 'Jane Smith', amount: '$4500', status: 'Pending', bankAccount: '•••• 4321', phoneNumber: '(987) 654-3210', role: 'Developer', date: '2023-05-15' },
    { id: 3, employee: 'Alex Johnson', amount: '$3800', status: 'Paid', bankAccount: '•••• 1234', phoneNumber: '(456) 789-0123', role: 'Designer', date: '2023-05-10' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setPaymentForm({ ...paymentForm, [name]: value });
  };

  const handleAddPayment = (event) => {
    event.preventDefault();
    if (!paymentForm.employee || !paymentForm.amount || !paymentForm.bankAccount || !paymentForm.phoneNumber || !paymentForm.role) {
      alert('Please fill in all fields.');
      return;
    }

    const newPayment = {
      id: payrollData.length + 1,
      employee: paymentForm.employee,
      amount: `$${paymentForm.amount}`,
      status: 'Pending',
      bankAccount: paymentForm.bankAccount,
      phoneNumber: paymentForm.phoneNumber,
      role: paymentForm.role,
      date: new Date().toISOString().split('T')[0]
    };

    setPayrollData([...payrollData, newPayment]);
    setPaymentForm({ employee: '', amount: '', bankAccount: '', phoneNumber: '', role: '' });
  };

  const handleSendPayment = (id) => {
    const updatedData = payrollData.map(item =>
      item.id === id ? { ...item, status: 'Paid' } : item
    );
    setPayrollData(updatedData);
  };

  const filteredData = payrollData.filter(item =>
    item.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="payroll-container">
      <div className="payroll-header">
        <h1><FaMoneyBillWave /> Payroll Management</h1>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="payroll-grid">
        {/* Payment Form Card */}
        <div className="form-card glassmorphism">
          <div className="card-header">
            <h2><FaPlus /> New Payment</h2>
          </div>
          <form onSubmit={handleAddPayment} className="payment-form">
            <div className="form-group">
              <input
                type="text"
                name="employee"
                value={paymentForm.employee}
                onChange={handleFormChange}
                placeholder="Employee Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="amount"
                value={paymentForm.amount}
                onChange={handleFormChange}
                placeholder="Amount ($)"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="bankAccount"
                value={paymentForm.bankAccount}
                onChange={handleFormChange}
                placeholder="Bank Account"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phoneNumber"
                value={paymentForm.phoneNumber}
                onChange={handleFormChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="role"
                value={paymentForm.role}
                onChange={handleFormChange}
                placeholder="Employee Role"
                required
              />
            </div>
            <button type="submit" className="submit-btn neumorphism">
              Add Payment
            </button>
          </form>
        </div>

        {/* Stats Overview */}
        <div className="stats-card glassmorphism">
          <div className="stat-item">
            <h3>Total Paid</h3>
            <p>$13,300</p>
            <span>This Month</span>
          </div>
          <div className="stat-item">
            <h3>Pending</h3>
            <p>$4,500</p>
            <span>2 Payments</span>
          </div>
          <div className="stat-item">
            <h3>Employees</h3>
            <p>{payrollData.length}</p>
            <span>In System</span>
          </div>
        </div>

        {/* Payment Table */}
        <div className="table-card glassmorphism">
          <div className="card-header">
            <h2>Payment History</h2>
            <div className="table-actions">
              <button className="export-btn neumorphism">Export CSV</button>
            </div>
          </div>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Amount</th>
                  <th>Role</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="employee-info">
                        <div className="avatar">{item.employee.charAt(0)}</div>
                        <div>
                          <strong>{item.employee}</strong>
                          <small>{item.phoneNumber}</small>
                        </div>
                      </div>
                    </td>
                    <td>{item.amount}</td>
                    <td>{item.role}</td>
                    <td>{item.date}</td>
                    <td>
                      <span className={`status-badge ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>
                      {item.status === 'Pending' && (
                        <button 
                          onClick={() => handleSendPayment(item.id)} 
                          className="action-btn send-btn"
                        >
                          <FaPaperPlane /> Pay Now
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PayrollSummary;