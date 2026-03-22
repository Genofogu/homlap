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
        </div>
      </div>
    </section>
  );
};

export default Hero;
