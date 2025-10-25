// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
             {/* We can use the text logo or an <img> tag */}
             <a href="/" className="footer__logo">HOMLAP</a>
          </div>
          <div className="footer__nav">
            <div className="footer__nav-col">
              <h3>HOMLAP</h3>
              <a href="#how-it-works">How does it work</a>
              <a href="#benefits">Benefits</a>
              <a href="#">Investing Strategies</a>
            </div>
            <div className="footer__nav-col">
              <h3>Resources</h3>
              <a href="#faqs">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer__legal">
          <p>© 2025 – Homlap</p>
          <div className="footer__legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;