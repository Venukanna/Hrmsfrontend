import React, { useState } from 'react';
import { FaSearch, FaChalkboardTeacher, FaRegClock, FaRegCalendarAlt, FaCertificate } from 'react-icons/fa';
import { MdComputer, MdPeople, MdBusiness } from 'react-icons/md';
import './Training.css';

const Training = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const trainingModules = [
    { 
      id: 1, 
      title: 'React Fundamentals', 
      duration: '2 hours', 
      category: 'technical',
      instructor: 'Sarah Johnson',
      date: '2023-06-15',
      enrolled: 24,
      completed: true
    },
    { 
      id: 2, 
      title: 'Advanced CSS Techniques', 
      duration: '3 hours', 
      category: 'technical',
      instructor: 'Michael Chen',
      date: '2023-06-20',
      enrolled: 18,
      completed: false
    },
    { 
      id: 3, 
      title: 'Leadership Skills', 
      duration: '4 hours', 
      category: 'soft-skills',
      instructor: 'David Wilson',
      date: '2023-07-05',
      enrolled: 12,
      completed: false
    },
    { 
      id: 4, 
      title: 'Business Communication', 
      duration: '2.5 hours', 
      category: 'business',
      instructor: 'Emily Rodriguez',
      date: '2023-07-10',
      enrolled: 15,
      completed: true
    },
    { 
      id: 5, 
      title: 'TypeScript Masterclass', 
      duration: '5 hours', 
      category: 'technical',
      instructor: 'Alex Turner',
      date: '2023-07-15',
      enrolled: 22,
      completed: false
    },
    { 
      id: 6, 
      title: 'Team Collaboration', 
      duration: '3 hours', 
      category: 'soft-skills',
      instructor: 'Jessica Lee',
      date: '2023-07-20',
      enrolled: 10,
      completed: false
    },
  ];

  const filteredModules = trainingModules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         module.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || module.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'technical': return <MdComputer className="category-icon" />;
      case 'soft-skills': return <MdPeople className="category-icon" />;
      case 'business': return <MdBusiness className="category-icon" />;
      default: return <FaChalkboardTeacher className="category-icon" />;
    }
  };

  return (
    <div className="training-container">
      <div className="training-header">
        <h1><FaChalkboardTeacher /> Training & Development</h1>
        <div className="training-controls">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search trainings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveFilter('technical')}
            >
              <MdComputer /> Technical
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'soft-skills' ? 'active' : ''}`}
              onClick={() => setActiveFilter('soft-skills')}
            >
              <MdPeople /> Soft Skills
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'business' ? 'active' : ''}`}
              onClick={() => setActiveFilter('business')}
            >
              <MdBusiness /> Business
            </button>
          </div>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card glassmorphism">
          <h3>Total Trainings</h3>
          <p>{trainingModules.length}</p>
        </div>
        <div className="stat-card glassmorphism">
          <h3>Completed</h3>
          <p>{trainingModules.filter(m => m.completed).length}</p>
        </div>
        <div className="stat-card glassmorphism">
          <h3>Enrolled</h3>
          <p>{trainingModules.reduce((sum, m) => sum + m.enrolled, 0)}</p>
        </div>
      </div>

      <div className="training-grid">
        {filteredModules.length > 0 ? (
          filteredModules.map((module) => (
            <div key={module.id} className="training-card glassmorphism">
              <div className="card-header">
                {getCategoryIcon(module.category)}
                <span className={`status-badge ${module.completed ? 'completed' : 'pending'}`}>
                  {module.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
              <h3>{module.title}</h3>
              <div className="card-meta">
                <span><FaChalkboardTeacher /> {module.instructor}</span>
                <span><FaRegClock /> {module.duration}</span>
              </div>
              <div className="card-footer">
                <span><FaRegCalendarAlt /> {module.date}</span>
                <span>{module.enrolled} enrolled</span>
              </div>
              <button className="action-btn">
                {module.completed ? <FaCertificate /> : 'Enroll Now'}
                {module.completed ? ' View Certificate' : ''}
              </button>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No training modules found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Training;