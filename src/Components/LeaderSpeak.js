import React from 'react';
import '../styles/LeaderSpeak.css';
import { FaQuoteLeft } from 'react-icons/fa';

const LeaderSpeak = () => {
  return (
    <section className="leader-section">
      <div className="leader-container">
        <h2 className="leader-heading">
          LEADERS <span>SPEAK</span>
        </h2>

        <div className="leader-quote-box">
          <FaQuoteLeft className="quote-icon" />
          <p className="leader-quote">
            “STE TSC STEEL SARL efficiently manufactures and markets a comprehensive range of steel
            products that include value-added items such as structural, architectural, and finished
            products. Our team of seasoned professionals has the expertise to understand our
            customers' needs and deliver solutions tailored to their requirements.”
          </p>
          <p className="leader-name">— Tajinder Singh, CMD, STE TSC STEEL SARL Group</p>
        </div>
      </div>
    </section>
  );
};

export default LeaderSpeak;
