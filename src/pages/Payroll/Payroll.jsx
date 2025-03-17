

import React, { useState } from 'react';
import './Payroll.css';

const PayrollSummary = React.memo(() => {
  // State for the payment form
  const [paymentForm, setPaymentForm] = useState({
    employee: '',
    amount: '',
    bankAccount: '',
    phoneNumber: '',
    role: '',
  });

  // State for the payroll data (existing payments)
  const [payrollData, setPayrollData] = useState([
    { id: 1, employee: 'John Doe', amount: '$5000', status: 'Paid', bankAccount: '123456789', phoneNumber: '123-456-7890', role: 'Manager' },
    { id: 2, employee: 'Jane Smith', amount: '$4500', status: 'Pending', bankAccount: '987654321', phoneNumber: '987-654-3210', role: 'Developer' },
  ]);

  // Handle input changes in the payment form
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setPaymentForm({ ...paymentForm, [name]: value });
  };

  // Handle form submission to add a new payment
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
      status: 'Pending', // New payments are initially "Pending"
      bankAccount: paymentForm.bankAccount,
      phoneNumber: paymentForm.phoneNumber,
      role: paymentForm.role,
    };

    setPayrollData([...payrollData, newPayment]);
    setPaymentForm({ employee: '', amount: '', bankAccount: '', phoneNumber: '', role: '' }); // Reset form
  };

  // Handle sending payment (updating status to "Paid")
  const handleSendPayment = (id) => {
    const updatedData = payrollData.map(item =>
      item.id === id ? { ...item, status: 'Paid' } : item
    );
    setPayrollData(updatedData);
    alert(`Payment for ${payrollData.find(item => item.id === id).employee} marked as Paid.`);
  };

  return (
    <div className="payroll-summary">
      <h2>Payroll Summary</h2>

      {/* Payment Do Option (Form) */}
      <div className="payment-form">
        <h3>Add New Payment</h3>
        <form onSubmit={handleAddPayment}>
          <div className="form-group">
            <label>Employee Name:</label>
            <input
              type="text"
              name="employee"
              value={paymentForm.employee}
              onChange={handleFormChange}
              placeholder="Enter employee name"
              required
            />
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={paymentForm.amount}
              onChange={handleFormChange}
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="form-group">
            <label>Bank Account:</label>
            <input
              type="text"
              name="bankAccount"
              value={paymentForm.bankAccount}
              onChange={handleFormChange}
              placeholder="Enter bank account"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={paymentForm.phoneNumber}
              onChange={handleFormChange}
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={paymentForm.role}
              onChange={handleFormChange}
              placeholder="Enter role"
              required
            />
          </div>
          <button type="submit" className="submit-button">Add Payment</button>
        </form>
      </div>

      {/* Payment Status Table */}
      <div className="payment-status">
        <h3>Payment Status</h3>
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Amount</th>
              <th>Bank Account</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map((item) => (
              <tr key={item.id}>
                <td>{item.employee}</td>
                <td>{item.amount}</td>
                <td>{item.bankAccount}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.role}</td>
                <td>{item.status}</td>
                <td>
                  {item.status === 'Pending' && (
                    <button onClick={() => handleSendPayment(item.id)} className="send-button">
                      Mark as Paid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default PayrollSummary;