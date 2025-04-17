import React, { useState } from 'react';
import { 
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaBirthdayCake, FaIdCard, FaCalendarAlt,
  FaEdit, FaSave, FaUpload, FaFilePdf
} from 'react-icons/fa';
import './EmployeeProfile.css';

const EmployeeProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [employee, setEmployee] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@company.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, San Francisco, CA 94107',
    dob: '1990-05-15',
    employeeId: 'EMP-2023-0456',
    position: 'Senior Software Engineer',
    department: 'Engineering',
    hireDate: '2020-03-10',
    emergencyContact: 'Sarah Johnson (Spouse) - +1 (555) 987-6543'
  });

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Employment Contract', type: 'PDF', date: '2020-03-10' },
    { id: 2, name: 'NDA Agreement', type: 'PDF', date: '2020-03-12' },
    { id: 3, name: 'Health Insurance', type: 'PDF', date: '2020-04-01' }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically call an API to save the changes
    console.log('Profile updated:', employee);
  };

  return (
    <div className="employee-profile-container">
      <div className="profile-header">
        <h1><FaUser /> Employee Profile</h1>
        <p>View and manage your personal information and documents</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="card-header">
            <h2>Personal Information</h2>
            {isEditing ? (
              <button className="save-btn" onClick={handleSave}>
                <FaSave /> Save Changes
              </button>
            ) : (
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                <FaEdit /> Edit Profile
              </button>
            )}
          </div>

          <div className="profile-details">
            <div className="detail-row">
              <div className="detail-item">
                <label><FaUser /> Full Name</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="name" 
                    value={employee.name} 
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{employee.name}</p>
                )}
              </div>
              <div className="detail-item">
                <label><FaEnvelope /> Email</label>
                {isEditing ? (
                  <input 
                    type="email" 
                    name="email" 
                    value={employee.email} 
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{employee.email}</p>
                )}
              </div>
            </div>

            <div className="detail-row">
              <div className="detail-item">
                <label><FaPhone /> Phone</label>
                {isEditing ? (
                  <input 
                    type="tel" 
                    name="phone" 
                    value={employee.phone} 
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{employee.phone}</p>
                )}
              </div>
              <div className="detail-item">
                <label><FaMapMarkerAlt /> Address</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="address" 
                    value={employee.address} 
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{employee.address}</p>
                )}
              </div>
            </div>

            <div className="detail-row">
              <div className="detail-item">
                <label><FaBirthdayCake /> Date of Birth</label>
                {isEditing ? (
                  <input 
                    type="date" 
                    name="dob" 
                    value={employee.dob} 
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{new Date(employee.dob).toLocaleDateString()}</p>
                )}
              </div>
              <div className="detail-item">
                <label><FaIdCard /> Employee ID</label>
                <p>{employee.employeeId}</p>
              </div>
            </div>

            <div className="detail-row">
              <div className="detail-item">
                <label>Position</label>
                <p>{employee.position}</p>
              </div>
              <div className="detail-item">
                <label>Department</label>
                <p>{employee.department}</p>
              </div>
            </div>

            <div className="detail-row">
              <div className="detail-item">
                <label><FaCalendarAlt /> Hire Date</label>
                <p>{new Date(employee.hireDate).toLocaleDateString()}</p>
              </div>
              <div className="detail-item">
                <label>Emergency Contact</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="emergencyContact" 
                    value={employee.emergencyContact} 
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{employee.emergencyContact}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="documents-card">
          <div className="card-header">
            <h2>My Documents</h2>
            <button className="upload-btn">
              <FaUpload /> Upload Document
            </button>
          </div>

          <div className="documents-list">
            {documents.map(doc => (
              <div key={doc.id} className="document-item">
                <div className="document-icon">
                  <FaFilePdf />
                </div>
                <div className="document-info">
                  <h3>{doc.name}</h3>
                  <p>Type: {doc.type} • Uploaded: {doc.date}</p>
                </div>
                <div className="document-actions">
                  <button className="view-btn">View</button>
                  <button className="download-btn">Download</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;