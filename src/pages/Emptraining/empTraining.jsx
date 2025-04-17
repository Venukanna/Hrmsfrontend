import React, { useState } from 'react';
import { 
  FaChalkboardTeacher, 
  FaClock, 
  FaCertificate, 
  FaChevronDown,
  FaPlayCircle,
  FaBookOpen,
  FaChartLine
} from 'react-icons/fa';
import './empTraining.css';

const Training = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const trainingModules = [
    { 
      id: 1, 
      title: 'React Fundamentals', 
      duration: '2 hours', 
      progress: 75,
      description: 'Master the core concepts of React including components, state, and props.',
      lessons: [
        { name: 'Introduction to React', duration: '15 min', completed: true },
        { name: 'Components & Props', duration: '25 min', completed: true },
        { name: 'State Management', duration: '30 min', completed: true },
        { name: 'Hooks Overview', duration: '50 min', completed: false }
      ],
      category: 'Frontend Development',
      certification: true
    },
    { 
      id: 2, 
      title: 'Advanced CSS Techniques', 
      duration: '3 hours', 
      progress: 30,
      description: 'Learn modern CSS techniques including Flexbox, Grid, and animations.',
      lessons: [
        { name: 'CSS Grid Layout', duration: '40 min', completed: true },
        { name: 'Flexbox Deep Dive', duration: '35 min', completed: false },
        { name: 'CSS Animations', duration: '45 min', completed: false }
      ],
      category: 'Frontend Development',
      certification: true
    },
    { 
      id: 3, 
      title: 'Leadership Skills', 
      duration: '4 hours', 
      progress: 10,
      description: 'Develop essential leadership skills for tech professionals.',
      lessons: [
        { name: 'Effective Communication', duration: '50 min', completed: false },
        { name: 'Team Management', duration: '1 hour', completed: false }
      ],
      category: 'Soft Skills',
      certification: false
    }
  ];

  const toggleModule = (id) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <div className="training-container">
      <div className="training-header">
        <h1><FaChalkboardTeacher /> Training & Development</h1>
        <p>Enhance your skills with our comprehensive training programs</p>
      </div>

      <div className="training-stats">
        <div className="stat-card">
          <div className="stat-icon total">
            <FaBookOpen />
          </div>
          <div className="stat-info">
            <span className="stat-number">{trainingModules.length}</span>
            <span className="stat-label">Available Courses</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon completed">
            <FaCertificate />
          </div>
          <div className="stat-info">
            <span className="stat-number">1</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon progress">
            <FaChartLine />
          </div>
          <div className="stat-info">
            <span className="stat-number">42%</span>
            <span className="stat-label">Overall Progress</span>
          </div>
        </div>
      </div>

      <div className="training-modules">
        {trainingModules.map((module) => (
          <div 
            key={module.id} 
            className={`training-card ${expandedModule === module.id ? 'expanded' : ''}`}
          >
            <div 
              className="card-header"
              onClick={() => toggleModule(module.id)}
            >
              <div className="module-info">
                <h3>{module.title}</h3>
                <div className="module-meta">
                  <span className="category">{module.category}</span>
                  <span className="duration">
                    <FaClock /> {module.duration}
                  </span>
                  {module.certification && (
                    <span className="certification">
                      <FaCertificate /> Certificate
                    </span>
                  )}
                </div>
              </div>
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
                <span className="progress-text">{module.progress}% Complete</span>
              </div>
              <div className="toggle-icon">
                <FaChevronDown />
              </div>
            </div>

            {expandedModule === module.id && (
              <div className="card-content">
                <p className="module-description">{module.description}</p>
                
                <div className="lessons-list">
                  <h4>Lessons</h4>
                  {module.lessons.map((lesson, index) => (
                    <div key={index} className="lesson-item">
                      <div className="lesson-info">
                        <div className={`lesson-status ${lesson.completed ? 'completed' : ''}`}>
                          {lesson.completed ? '✓' : <FaPlayCircle />}
                        </div>
                        <span className="lesson-name">{lesson.name}</span>
                      </div>
                      <span className="lesson-duration">{lesson.duration}</span>
                    </div>
                  ))}
                </div>

                <div className="module-actions">
                  <button className="continue-btn">
                    {module.progress === 100 ? 'Review Course' : 'Continue Learning'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;