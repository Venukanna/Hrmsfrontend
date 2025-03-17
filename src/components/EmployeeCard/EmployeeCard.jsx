import React from 'react';
import './EmployeeCard.css';

const EmployeeCard = React.memo(({ title, value }) => {
  return (
    <div className="employee-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
});

export default EmployeeCard;
