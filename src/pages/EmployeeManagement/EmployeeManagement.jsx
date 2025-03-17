// src/pages/EmployeeManagement/EmployeeManagement.jsx
import React, { useState } from 'react';
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';
import './EmployeeManagement.css';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', department: 'HR', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', department: 'Finance', email: 'jane@example.com' },
  ]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleEditEmployee = (id) => {
    const employeeToEdit = employees.find(employee => employee.id === id);
    setEditingEmployee(employeeToEdit);
  };


  return (

    <div className="employee-management">
      <h1>Employee Management</h1>
      <EmployeeForm onSubmit={handleAddEmployee} initialData={editingEmployee} />

      <div className="employee-list">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-item">
            <span>{employee.name}</span>
            <span>{employee.department}</span>
            <span>{employee.email}</span>
            <button onClick={() => handleEditEmployee(employee.id)}>Edit</button>
            <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeManagement;
