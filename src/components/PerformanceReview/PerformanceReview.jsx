import React, { useState } from 'react';
import { 
  FiStar, 
  FiEdit2, 
  FiCheckCircle, 
  FiUser, 
  FiCalendar,
  FiTrendingUp,
  FiAward,
  FiBarChart2,
  FiSend
} from 'react-icons/fi';
import './PerformanceReview.css';

const PerformanceReview = () => {
  // Employee data
  const employees = [
    { id: 1, name: 'John Doe', position: 'Senior Developer', department: 'Engineering', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'Jane Smith', position: 'UX Designer', department: 'Design', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 3, name: 'Alex Johnson', position: 'Product Manager', department: 'Product', avatar: 'https://randomuser.me/api/portraits/men/67.jpg' }
  ];

  // Review criteria
  const criteria = [
    { id: 1, name: 'Productivity', description: 'Quality and quantity of work output' },
    { id: 2, name: 'Collaboration', description: 'Teamwork and communication skills' },
    { id: 3, name: 'Innovation', description: 'Creative problem solving and initiative' },
    { id: 4, name: 'Leadership', description: 'Guidance and mentorship abilities' },
    { id: 5, name: 'Adaptability', description: 'Response to change and challenges' }
  ];

  // State management
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [ratings, setRatings] = useState({});
  const [feedback, setFeedback] = useState('');
  const [activeTab, setActiveTab] = useState('current');
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle rating change
  const handleRatingChange = (criterionId, value) => {
    setRatings(prev => ({
      ...prev,
      [criterionId]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      employee: selectedEmployee,
      ratings,
      feedback
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Calculate average rating
  const averageRating = Object.values(ratings).length > 0 
    ? (Object.values(ratings).reduce((a, b) => a + b, 0) / Object.values(ratings).length)
    : 0;

  return (
    <div className="performance-review-modern">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="page-title">
          <FiTrendingUp className="title-icon" />
          Performance Reviews
        </h1>
        <div className="review-period">
          <FiCalendar className="calendar-icon" />
          Q3 2023 Performance Cycle
        </div>
      </div>

      {/* Main Content */}
      <div className="review-container">
        {/* Employee Selection */}
        <div className="employee-selection">
          <h3 className="section-title">
            <FiUser className="section-icon" />
            Select Employee
          </h3>
          <div className="employee-cards">
            {employees.map(employee => (
              <div 
                key={employee.id}
                className={`employee-card ${selectedEmployee.id === employee.id ? 'active' : ''}`}
                onClick={() => setSelectedEmployee(employee)}
              >
                <img src={employee.avatar} alt={employee.name} className="employee-avatar" />
                <div className="employee-info">
                  <h4>{employee.name}</h4>
                  <p>{employee.position}</p>
                  <span className="department-badge">{employee.department}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Form */}
        <div className="review-form-section">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'current' ? 'active' : ''}`}
              onClick={() => setActiveTab('current')}
            >
              Current Review
            </button>
            <button 
              className={`tab ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              Review History
            </button>
          </div>

          {activeTab === 'current' ? (
            <form onSubmit={handleSubmit} className="review-form">
              <div className="selected-employee">
                <img src={selectedEmployee.avatar} alt={selectedEmployee.name} className="review-avatar" />
                <div>
                  <h3>{selectedEmployee.name}</h3>
                  <p>{selectedEmployee.position} • {selectedEmployee.department}</p>
                </div>
              </div>

              <div className="rating-summary">
                <div className="average-rating">
                  <span className="rating-value">{averageRating.toFixed(1)}</span>
                  <span className="rating-scale">/5.0</span>
                </div>
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map(star => (
                    <FiStar 
                      key={star} 
                      className={`star ${star <= averageRating ? 'filled' : ''}`}
                    />
                  ))}
                </div>
                <span className="rating-label">Overall Rating</span>
              </div>

              <div className="criteria-ratings">
                <h4 className="criteria-title">
                  <FiBarChart2 className="criteria-icon" />
                  Evaluation Criteria
                </h4>
                {criteria.map(criterion => (
                  <div key={criterion.id} className="criterion-item">
                    <div className="criterion-info">
                      <h5>{criterion.name}</h5>
                      <p>{criterion.description}</p>
                    </div>
                    <div className="rating-control">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          className={`star-btn ${ratings[criterion.id] >= star ? 'active' : ''}`}
                          onClick={() => handleRatingChange(criterion.id, star)}
                        >
                          <FiStar className="star-icon" />
                        </button>
                      ))}
                      <span className="rating-value-display">
                        {ratings[criterion.id] || 0}/5
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="feedback-section">
                <h4 className="feedback-title">
                  <FiEdit2 className="feedback-icon" />
                  Additional Feedback
                </h4>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Provide detailed feedback on performance..."
                  className="feedback-input"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  <FiSend className="submit-icon" />
                  Submit Review
                </button>
              </div>
            </form>
          ) : (
            <div className="review-history">
              <div className="history-item">
                <div className="history-header">
                  <span className="history-period">Q2 2023</span>
                  <div className="history-rating">
                    <span>4.2</span>
                    <div className="stars">
                      {[1, 2, 3, 4].map(star => (
                        <FiStar key={star} className="filled" />
                      ))}
                      <FiStar className="half-filled" />
                    </div>
                  </div>
                </div>
                <p className="history-feedback">
                  "John has shown excellent problem-solving skills this quarter, particularly in the XYZ project. He could benefit from more proactive communication with other teams."
                </p>
                <div className="history-reviewer">
                  Reviewed by: Sarah Johnson (Engineering Manager)
                </div>
              </div>

              <div className="history-item">
                <div className="history-header">
                  <span className="history-period">Q1 2023</span>
                  <div className="history-rating">
                    <span>3.8</span>
                    <div className="stars">
                      {[1, 2, 3].map(star => (
                        <FiStar key={star} className="filled" />
                      ))}
                      <FiStar className="filled" />
                      <FiStar className="half-filled" />
                    </div>
                  </div>
                </div>
                <p className="history-feedback">
                  "Solid performance overall. John met all his deliverables but could take more initiative in proposing technical improvements."
                </p>
                <div className="history-reviewer">
                  Reviewed by: Michael Chen (Tech Lead)
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Notification */}
      {showSuccess && (
        <div className="success-notification">
          <FiCheckCircle className="success-icon" />
          <div className="success-message">
            <h4>Review Submitted Successfully!</h4>
            <p>Performance review for {selectedEmployee.name} has been recorded.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceReview;