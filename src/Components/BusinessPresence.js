import React from 'react';
import '../styles/BusinessPresence.css';

const BusinessPresence = () => {
  return (
    <section className="business-section">
      <div className="business-container">
        <h2 className="business-title">Our Business & Presence</h2>
        <p className="business-description">
          We are a <strong>well-established</strong>, globally recognized, and respected <strong>value-added steel manufacturing</strong> organization with a varied portfolio of businesses that are prepared for the future.
        </p>

        <div className="location-grid">
          {[
            'Nigeria, Africa',
            'Ethiopia, Africa',
            'Sudan, Africa',
            'Ghana, Africa',
            'Senegal, Africa',
            'Benin, Africa'
          ].map((location, index) => (
            <div key={index} className="location-card">
              {location}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPresence;
