import { Link } from 'react-router-dom';
import React from 'react';
import heroPhone from '../assets/images/hero-phone.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            Just Swipe and Your Home is Ready to move within Minutes
          </h1>
          <div className="hero__perks">
            <div className="hero__perk-item">
              <div className="hero__perk-icon">
                <svg width="14" height="14" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5L4.95263 9.45263L13.4053 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p>No Brokers. No Hassle. Just Homes In Minutes</p>
            </div>
            <div className="hero__perk-item">
              <div className="hero__perk-icon">
                <svg width="14" height="14" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5L4.95263 9.45263L13.4053 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p>Verified Homes, Zero Wait - Rent in Just In Minutes</p>
            </div>
            <div className="hero__perk-item">
              <div className="hero__perk-icon">
                <svg width="14" height="14" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5L4.95263 9.45263L13.4053 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p>BOOK PAY AND MOVE</p>
            </div>


          </div>
          <Link to="/pre-register" className="button hero__cta">Get Started</Link>
        </div>
        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img src={heroPhone} alt="Homlap App Screenshot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;