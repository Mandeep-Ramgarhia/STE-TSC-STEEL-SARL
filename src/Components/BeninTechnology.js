import React from 'react';
import '../styles/BeninTechnology.css';

const BeninTechnology = () => {
  return (
    <section className="benin-tech">
      <div className="benin-tech-container">
        <div className="benin-tech-text">
            {/* <h2>Our Plants</h2> */}
          <h2>Benin Plants At The Forefront Of Technology</h2>
          <p>
            <strong>STE TSC TEEL SARL</strong> is revolutionizing the steel industry by using
            top-of-the-line technology and precisely monitoring all processes. We provide
            solutions for various industrial needs and stand by our dedication to quality.
          </p>
        </div>
        <div className="benin-tech-image">
          <img src="/plant2.jpg" alt="Benin Steel Plant" />
        </div>
      </div>
    </section>
  );
};

export default BeninTechnology;
