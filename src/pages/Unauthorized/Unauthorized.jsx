import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Unauthorized.css'; // We'll create this CSS file next

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleGoHome = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="unauthorized-container">
      <div className="unauthorized-content">
        <div className="error-icon">🚫</div>
        <h1>403 - Access Denied</h1>
        <p className="error-message">
          You don't have permission to access this page.
        </p>
        <div className="button-group">
          <button onClick={handleGoBack} className="back-button">
            Go Back
          </button>
          <button onClick={handleGoHome} className="home-button">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;