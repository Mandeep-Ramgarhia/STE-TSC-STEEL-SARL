import React from 'react';
import '../styles/VisionMission.css';
import { FaEye, FaBullseye } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="vision-mission-container">
        <h2 className="vm-title">Our Vision & Mission</h2>
        <p className="vm-intro">
          At <strong>STE TSC TEEL SARL</strong>, our name stands for quality and precision. We strive to understand your needs so that our complete range of products meets your requirements with reliability, durability, safety, and efficiency. Our commitment to excellence and customer satisfaction has established us as leaders in a continuously evolving and dynamic business environment.
        </p>

        <div className="vm-cards">
          <div className="vm-card glass-card">
            <div className="vm-icon"><FaEye /></div>
            <h3 className="vm-heading">Vision</h3>
            <p>
              To be a global benchmark in steel manufacturing — recognized for our uncompromising
              quality, forward-thinking innovation, and deep commitment to shaping a sustainable future.
            </p>
          </div>

          <div className="vm-card glass-card">
            <div className="vm-icon"><FaBullseye /></div>
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
