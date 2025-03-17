// Training.jsx
import React from 'react';
import TrainingCard from '../../components/TrainingCard/TrainingCard';
import './Training.css';

const Training = () => {
  const trainingModules = [
    { id: 1, title: 'React Basics', duration: '2 hours' },
    { id: 2, title: 'Advanced CSS', duration: '3 hours' },
  ];

  return (
    <div className="training">
      <h1>Training and Development</h1>
      <div className="training-modules">
        {trainingModules.map((module) => (
          <TrainingCard
            key={module.id}
            title={module.title}
            duration={module.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Training;