import React from 'react';
import '../styles/CompanyOverview.css';

const CompanyOverview = () => {
  return (
    <section className="company-overview">
      <div className="overview-wrapper">
        <div className="overview-header">
          <div className="overview-line"></div>
          <h2>STE TSC TEEL SARL</h2>
          <div className="overview-line"></div>
        </div>
        <p className="overview-highlight">
          One Name. One Steel Standard. Global Presence.
        </p>
        <p className="overview-text">
          <strong>STE TSC STEEL SARL Group</strong> is the destination for all your steel needs. The name to reckon with in the steel industry since 2024 has carved a niche in the global arena.
        </p>
        <p className="overview-text">
          It has its business presence in Asia, Africa and the Middle East. The Group has manufacturing facilities in Nigeria, Ethiopia, and Sudan, with service and trading centres in Benin, Ghana and Senegal.
        </p>
      </div>
    </section>
  );
};

export default CompanyOverview;
