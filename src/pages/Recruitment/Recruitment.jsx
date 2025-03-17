// Recruitment.jsx
import React from 'react';
import RecruitmentCard from '../../components/RecruitmentCard/RecruitmentCard';
import './Recruitment.css';

const Recruitment = () => {
  const jobOpenings = [
    { id: 1, title: 'Software Engineer', department: 'IT', location: 'Remote' },
    { id: 2, title: 'HR Manager', department: 'HR', location: 'On-site' },
  ];

  return (
    <div className="recruitment">
      <h1>Recruitment</h1>
      <div className="job-openings">
        {jobOpenings.map((job) => (
          <RecruitmentCard
            key={job.id}
            title={job.title}
            department={job.department}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Recruitment;