import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Custom styles

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Employee Management System</h1>
          <p>Manage your employees efficiently with ease.</p>
          <button className="btn btn-primary btn-lg" onClick={() => navigate("/employees")}>
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Our System?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Employee Tracking</h3>
            <p>Keep records of all employees in one place.</p>
          </div>
          <div className="feature-card">
            <h3>Secure & Reliable</h3>
            <p>Ensure data security with our system.</p>
          </div>
          <div className="feature-card">
            <h3>Easy to Use</h3>
            <p>Simple UI for seamless management.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <button className="btn btn-success btn-lg" onClick={() => navigate("/employees")}>
          Explore Now
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
