import React from 'react';
import '../styles/HomeBanner.css';

const HomeBanner = () => {
  return (
    <section className="home-banner medium-banner">
      <div className="home-banner-overlay" />
      <div className="home-banner-content">
        <h1>Welcome to STE TSC TEEL SARL</h1>
        <p>Delivering Excellence in Steel Manufacturing & Technological Innovation</p>
        <button className="banner-btn">Explore More</button>
      </div>
    </section>
  );
};

export default HomeBanner;
