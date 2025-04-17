import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-header">
        <h1>About Us – HR Management Solutions</h1>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Welcome to <strong>HR Pro Solutions</strong>, your trusted partner in <strong>HR Management Solutions</strong>. 
          We specialize in providing comprehensive human resource services designed to streamline recruitment, 
          employee engagement, performance management, and compliance, helping businesses build a productive 
          and motivated workforce.
        </p>
        <p>
          With years of expertise in the HR industry, we understand the challenges organizations face in talent 
          acquisition, retention, and workforce optimization. Our mission is to empower businesses with innovative 
          HR strategies, cutting-edge technology, and personalized support to drive growth and efficiency.
        </p>
      </section>

      <section className="services-section">
        <h3>Our Services</h3>
        <p>We offer a wide range of HR management services tailored to meet the needs of modern businesses:</p>

        <div className="service-card">
          <h3>Recruitment & Talent Acquisition</h3>
          <p>
            We help companies attract top talent through strategic sourcing, candidate screening, and efficient 
            hiring processes. Our data-driven approach ensures the right fit for your organization.
          </p>
        </div>

        <div className="service-card">
          <h3>Employee Onboarding & Training</h3>
          <p>
            A smooth onboarding process enhances employee retention. We design structured onboarding programs 
            and continuous training modules to boost productivity and engagement.
          </p>
        </div>

        <div className="service-card">
          <h3>Performance Management</h3>
          <p>
            Our performance evaluation systems help organizations track employee progress, set measurable goals, 
            and provide constructive feedback to foster professional growth.
          </p>
        </div>

        <div className="service-card">
          <h3>Payroll & Compliance Management</h3>
          <p>
            We ensure seamless payroll processing while keeping your business compliant with labor laws and 
            regulations, minimizing risks and legal complications.
          </p>
        </div>

        <div className="service-card">
          <h3>Employee Engagement & Retention</h3>
          <p>
            Happy employees drive success. We implement engagement strategies, recognition programs, and workplace 
            wellness initiatives to enhance job satisfaction and reduce turnover.
          </p>
        </div>

        <div className="service-card">
          <h3>HR Technology Solutions</h3>
          <p>
            From <strong>HRIS (Human Resource Information Systems)</strong> to <strong>AI-powered recruitment tools</strong>, 
            we integrate the latest technology to automate HR processes and improve efficiency.
          </p>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Expert HR Consultants</strong> – Our team consists of certified HR professionals with industry experience.</li>
          <li><strong>Customized Solutions</strong> – We tailor our services to fit your business needs.</li>
          <li><strong>Data-Driven Approach</strong> – Leveraging analytics for smarter HR decisions.</li>
          <li><strong>Cost-Effective Services</strong> – Helping you optimize HR budgets without compromising quality.</li>
          <li><strong>Compliance & Risk Management</strong> – Keeping your business protected with up-to-date legal knowledge.</li>
        </ul>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          To revolutionize HR management by fostering workplaces where talent thrives, businesses grow, 
          and employees feel valued.
        </p>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Ready to transform your HR operations? <a href="/contact">Contact us</a> today for a consultation!</p>
      </section>

      <footer className="references">
        <h3>References:</h3>
        <ul>
          <li><a href="https://www.shrm.org/" target="_blank" rel="noopener noreferrer">SHRM (Society for Human Resource Management)</a></li>
          <li><a href="https://business.linkedin.com/talent-solutions" target="_blank" rel="noopener noreferrer">LinkedIn Talent Solutions</a></li>
          <li><a href="https://www.bamboohr.com/" target="_blank" rel="noopener noreferrer">BambooHR – HR Software & Insights</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default AboutUs;