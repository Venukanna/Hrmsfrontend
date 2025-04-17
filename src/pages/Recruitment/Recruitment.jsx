import React from 'react';
import './Recruitment.css';

const RecruitmentPage = () => {
  const features = [
    {
      title: "AI Candidate Matching",
      description: "Smart algorithms match candidates to your roles instantly",
      icon: "🤖",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Talent Pipeline",
      description: "Build and maintain relationships with potential candidates",
      icon: "📊",
      color: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
    },
    {
      title: "Automated Scheduling",
      description: "Eliminate back-and-forth with smart interview scheduling",
      icon: "⏰",
      color: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
      title: "Video Interviews",
      description: "Conduct and record interviews directly in the platform",
      icon: "🎥",
      color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      title: "Diversity Analytics",
      description: "Track and improve your diversity hiring metrics",
      icon: "🌍",
      color: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
    },
    {
      title: "Employer Branding",
      description: "Showcase your company culture to attract top talent",
      icon: "🏆",
      color: "linear-gradient(135deg, #a6c1ee 0%, #fbc2eb 100%)"
    },
    {
      title: "Candidate Experience",
      description: "Delight candidates with seamless communication",
      icon: "💬",
      color: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)"
    },
    {
      title: "Market Intelligence",
      description: "Real-time data on compensation and hiring trends",
      icon: "📈",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }
  ];

  return (
    <div className="recruitment-modern">
      <header className="modern-header">
        <h1>Next-Gen <span>Recruitment</span> Platform</h1>
        <p>Transform your hiring process with cutting-edge technology</p>
      </header>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div 
            className="feature-card" 
            key={index}
            style={{ '--bg-gradient': feature.color }}
          >
            <div className="card-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="card-hover-effect"></div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <div className="cta-glass">
          <h2>Ready to revolutionize your hiring?</h2>
          <p>Join 5,000+ companies using our platform</p>
          <div className="cta-buttons">
            <button className="primary-btn">Request Demo</button>
            <button className="secondary-btn">Explore Features</button>
          </div>
          <div className="floating-shapes">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="shape-3"></div>
          </div>
        </div>
      </div>

      <div className="employee-directory-modern">
        <div className="directory-content">
          <h2>Employee Network</h2>
          <p>Connect with professionals across your organization</p>
          <a 
            href="https://www.rapclint.com/9gad_source-1&qofid=GPKCQW1nm-BNDARiM8jUxSq6jpGdoyLupet1EfaIP5Ow5172VtgBvAUtcs1158yndphKlYNnz4AsJdpEfAluv_wc8*" 
            className="directory-btn"
          >
            Explore Directory <span>→</span>
          </a>
        </div>
        <div className="directory-gradient"></div>
      </div>
    </div>
  );
};

export default RecruitmentPage;