// TrainingCard.jsx
import React from 'react';
import './TrainingCard.css';

const TrainingCard = ({ title, duration }) => {
  return (
    <div className="training-card">
      <h3>{title}</h3>
      <p>{duration}</p>
      <button>Start</button>
    </div>
  );
};

export default TrainingCard;