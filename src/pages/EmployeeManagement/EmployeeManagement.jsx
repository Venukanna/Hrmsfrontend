import React, { useState } from 'react';
import { 
  FiEdit2, 
  FiTrash2, 
  FiPlus, 
  FiSearch,
  FiFilter,
  FiDownload,
  FiUser,
  FiMail,
  FiBriefcase,
  FiPhone,
  FiCalendar,
  FiDollarSign
} from 'react-icons/fi';
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';
import './EmployeeManagement.css';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      department: 'HR', 
      position: 'HR Manager',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      hireDate: '2022-01-15',
      salary: '$85,000',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    { 
      id: 2, 
      name: 'venu', 
      department: 'Finance', 
      position: 'Financial Analyst',
      email: 'jane@example.com',
      phone: '+1 (555) 987-6543',
      hireDate: '2021-05-22',
      salary: '$72,500',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    { 
      id: 3, 
      name: 'akhil', 
      department: 'Engineering', 
      position: 'Senior Developer',
      email: 'robert@example.com',
      phone: '+1 (555) 456-7890',
      hireDate: '2020-11-10',
      salary: '$110,000',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    { 
      id: 4, 
      name: 'rabin', 
      department: 'Marketing', 
      position: 'Marketing Specialist',
      email: 'emily@example.com',
      phone: '+1 (555) 789-0123',
      hireDate: '2023-02-28',
      salary: '$68,000',
      status: 'Probation',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    { 
      id: 4, 
      name: 'reddy', 
      department: 'Marketing', 
      position: 'Marketing Specialist',
      email: 'emily@example.com',
      phone: '+1 (555) 789-0123',
      hireDate: '2023-02-28',
      salary: '$68,000',
      status: 'Probation',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    { 
      id: 4, 
      name: 'naveen', 
      department: 'Marketing', 
      position: 'Marketing Specialist',
      email: 'emily@example.com',
      phone: '+1 (555) 789-0123',
      hireDate: '2023-02-28',
      salary: '$68,000',
      status: 'Probation',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    { 
      id: 4, 
      name: 'abcd', 
      department: 'Marketing', 
      position: 'Marketing Specialist',
      email: 'emily@example.com',
      phone: '+1 (555) 789-0123',
      hireDate: '2023-02-28',
      salary: '$68,000',
      status: 'Probation',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    { 
      id: 4, 
      name: 'venu', 
      department: 'it', 
      position: 'Marketing Specialist',
      email: 'emily@example.com',
      phone: '+1 (555) 789-0123',
      hireDate: '2023-02-28',
      salary: '$68,000',
      status: 'Probation',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, { 
      id: employees.length + 1, 
      status: 'Active',
      avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`,
      ...newEmployee 
    }]);
    setShowForm(false);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees(employees.map(employee => 
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    ));
    setEditingEmployee(null);
    setShowForm(false);
  };

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'All' || 
                            employee.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  const departments = ['All', ...new Set(employees.map(emp => emp.department))];

  return (
    <div className="employee-management-modern">
      <div className="header-section">
        <h1 className="page-title">
          <FiUser className="title-icon" />
          Employee Management
        </h1>
        <div className="header-actions">
          <button 
            className="primary-btn"
            onClick={() => {
              setEditingEmployee(null);
              setShowForm(true);
            }}
          >
            <FiPlus /> Add Employee
          </button>
        </div>
      </div>

      <div className="controls-section">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-group">
          <FiFilter className="filter-icon" />
          <select
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
        
        <button className="export-btn">
          <FiDownload /> Export
        </button>
      </div>

      {showForm && (
        <div className="form-modal">
          <div className="modal-content">
            <EmployeeForm 
              onSubmit={editingEmployee ? handleUpdateEmployee : handleAddEmployee}
              initialData={editingEmployee}
              onCancel={() => {
                setEditingEmployee(null);
                setShowForm(false);
              }}
            />
          </div>
        </div>
      )}

      <div className="employee-grid">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <div key={employee.id} className="employee-card">
              <div className="card-header">
                <img 
                  src={employee.avatar} 
                  alt={employee.name} 
                  className="employee-avatar"
                />
                <div className="employee-basic">
                  <h3>{employee.name}</h3>
                  <span className={`status-badge ${employee.status.toLowerCase()}`}>
                    {employee.status}
                  </span>
                </div>
              </div>
              
              <div className="employee-details">
                <div className="detail-item">
                  <FiBriefcase className="detail-icon" />
                  <div>
                    <span className="detail-label">Department</span>
                    <span className="detail-value">{employee.department}</span>
                  </div>
                </div>
                
                <div className="detail-item">
                  <FiUser className="detail-icon" />
                  <div>
                    <span className="detail-label">Position</span>
                    <span className="detail-value">{employee.position}</span>
                  </div>
                </div>
                
                <div className="detail-item">
                  <FiMail className="detail-icon" />
                  <div>
                    <span className="detail-label">Email</span>
                    <span className="detail-value">{employee.email}</span>
                  </div>
                </div>
                
                <div className="detail-item">
                  <FiPhone className="detail-icon" />
                  <div>
                    <span className="detail-label">Phone</span>
                    <span className="detail-value">{employee.phone}</span>
                  </div>
                </div>
                
                <div className="detail-item">
                  <FiCalendar className="detail-icon" />
                  <div>
                    <span className="detail-label">Hire Date</span>
                    <span className="detail-value">{employee.hireDate}</span>
                  </div>
                </div>
                
                <div className="detail-item">
                  <FiDollarSign className="detail-icon" />
                  <div>
                    <span className="detail-label">Salary</span>
                    <span className="detail-value">{employee.salary}</span>
                  </div>
                </div>
              </div>
              
              <div className="card-actions">
                <button 
                  className="edit-btn"
                  onClick={() => handleEditEmployee(employee)}
                >
                  <FiEdit2 /> Edit
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => handleDeleteEmployee(employee.id)}
                >
                  <FiTrash2 /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <img src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png" alt="No results" />
            <h3>No employees found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeManagement;