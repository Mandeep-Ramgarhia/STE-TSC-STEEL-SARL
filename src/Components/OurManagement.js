import React from 'react';
import '../styles/OurManagement.css';

const OurManagement = () => {
  return (
    <section className="management-section">
      <div className="management-container">
        <h2 className="management-title">Our Management</h2>

        <div className="management-cards">
          <div className="management-card">
            <img
              src="./root.jpg"
              alt="Tajinder Singh"
              className="management-image"
            />
            <h3 className="management-name">Tajinder Singh</h3>
            <p className="management-role">Head of Management</p>
          </div>

          <div className="management-card">
            <img
              src="./root.jpg"
              alt="Kaazmi"
              className="management-image"
            />
            <h3 className="management-name">Kaazmi</h3>
            <p className="management-role">Accounts & Finance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurManagement;
