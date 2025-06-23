import React from 'react';
import '../styles/HomeSection.css';

const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="home-header">
        <h2>Welcome to STE TSC TEEL SARL</h2>
        <p>
          A trusted leader in global steel solutions, empowering industries with quality,
          precision, and sustainability.
        </p>
      </div>

      <div className="home-features">
        <div className="feature-card">
          <h3>Our Products</h3>
          <p>
            From flat steel to coils and custom fabrications, we deliver precision-engineered products
            to meet every industrial need.
          </p>
        </div>
        <div className="feature-card">
          <h3>Process Lines</h3>
          <p>
            Our advanced production lines ensure consistent quality, efficiency, and compliance with international standards.
          </p>
        </div>
        <div className="feature-card">
          <h3>Industries We Serve</h3>
          <p>
            Serving automotive, construction, energy, and manufacturing sectors globally with customized steel solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
