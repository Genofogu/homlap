import { Link } from 'react-router-dom';
import React from 'react';
import heroPhone from '../assets/images/hero-phone.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__phones" aria-hidden="true">
        <img src={heroPhone} alt="" className="hero__phone hero__phone--left" />
        <img src={heroPhone} alt="" className="hero__phone hero__phone--center" />
        <img src={heroPhone} alt="" className="hero__phone hero__phone--right" />
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            Find your next home in minutes with Homlap.
          </h1>
          <p className="hero__subtitle">
            Verified listings, zero broker hassle, and smooth booking from discovery to move-in.
          </p>
          <div className="hero__actions">
            <Link to="/pre-register" className="button hero__cta">Get Started</Link>
            <a href="#how-it-works" className="hero__link">How it works</a>
          </div>

          <div className="hero__store-buttons" aria-label="Download Homlap app">
            <a href="#" aria-label="Get it on Google Play">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
            </a>
            <a href="#" aria-label="Download on the App Store">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
