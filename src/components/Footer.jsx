import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__store-buttons">
          <a href="#" aria-label="Download on Google Play">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
          </a>
          <a href="#" aria-label="Download on App Store">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
          </a>
        </div>

        <div className="footer__contact">
          <p>Feel free to reach us at:</p>
          <a href="mailto:help@homlap.com" className="footer__email">✉ help@homlap.com</a>
        </div>

        <div className="footer__divider" />

        <div className="footer__links-row">
          <div className="footer__nav-col">
            <h3>Support</h3>
            <a href="#">Contact us</a>
            <a href="#">Delete account</a>
          </div>
          <div className="footer__nav-col">
            <h3>Company</h3>
            <a href="#">Careers</a>
            <a href="mailto:careers@homlap.com">careers@homlap.com</a>
            <a href="#">Become a partner</a>
          </div>
          <div className="footer__nav-col">
            <h3>Legal</h3>
            <a href="#">Terms & conditions</a>
            <a href="#">Privacy policy</a>
          </div>

          <div className="footer__socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
          </div>
        </div>

        <div className="footer__legal">
          <p>Homlap © 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
