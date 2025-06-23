import React from 'react';
import '../styles/MiddleSection.css';

const MiddleSection = () => {
  return (
    <section className="middle-section">
      <div className="middle-container">
        <div className="middle-text">
          <h2>Who We Are</h2>
          <p>
            STE TSC TEEL SARL is a global leader in innovative and sustainable steel solutions.
            Our mission is to empower industries with premium-quality steel products backed by
            engineering excellence and a commitment to environmental responsibility.
          </p>
          <p>
            With state-of-the-art processing lines and a presence across key sectors, we are shaping
            the future of infrastructure, manufacturing, and technology — one steel innovation at a time.
          </p>
        </div>
        <div className="middle-image">
          <img src="./pexels-igor-starkov-233202-1117452.jpg" alt="Steel plant" />
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
