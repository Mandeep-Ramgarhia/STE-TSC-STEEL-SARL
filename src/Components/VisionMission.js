import React from 'react';
import '../styles/VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="vision-mission-container">
        <h2 className="vm-title">Our Vision & Mission</h2>
        <p className="vm-intro">
          At <strong>STE TSC TEEL SARL</strong>, we go beyond steel. We deliver trust, innovation, and long-term partnerships 
          built on a foundation of quality, service, and sustainability.
        </p>

        <div className="vm-cards">
          <div className="vm-card">
            <h3 className="vm-heading">Vision</h3>
            <p>
              To be a global benchmark in steel manufacturing — recognized for our uncompromising
              quality, forward-thinking innovation, and deep commitment to shaping a sustainable future.
            </p>
          </div>

          <div className="vm-card">
            <h3 className="vm-heading">Mission</h3>
            <p>
              To deliver high-performance steel solutions that consistently exceed customer expectations,
              while fostering strong partnerships and creating value for our people, clients, and the planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
