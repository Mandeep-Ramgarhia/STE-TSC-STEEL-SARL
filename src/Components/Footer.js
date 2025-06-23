import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section company">
          <h2>STE TSC TEEL SARL</h2>
          <p>
            We deliver innovative, sustainable, and high-quality steel solutions across industries
            to build a stronger future.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Business</li>
            <li>Products</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: info@ste-tscsteel.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Location: Global Industrial Park, UAE</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} STE TSC TEEL SARL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
