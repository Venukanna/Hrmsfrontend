import React, { useState, useEffect, useCallback } from 'react';
import './EmployeeForm.css';

const EmployeeForm = React.memo(({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [department, setDepartment] = useState(initialData ? initialData.department : '');
  const [email, setEmail] = useState(initialData ? initialData.email : '');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDepartment(initialData.department);
      setEmail(initialData.email);
    }
  }, [initialData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit({ name, department, email });
  }, [name, department, email, onSubmit]);

  return (
    <div className="employee-form">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
});

export default EmployeeForm;
