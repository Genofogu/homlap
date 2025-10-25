import { Link } from 'react-router-dom';
import React from 'react';
import howItWorksPhone from '../assets/images/how-it-works-phone.png';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works__heading">
          <span className="tag">HOW DOES IT WORK</span>
          <h2 className="section-title">Homlap House Rent – Made for You</h2>
        </div>

        <div className="how-it-works__main">
          <div className="how-it-works__visual">
           <img src={howItWorksPhone} alt="Phone showing Homlap interface" />
          </div>
          <div className="how-it-works__steps">
            <div className="how-it-works__step">
              <div className="how-it-works__step-number">1</div>
              <div className="how-it-works__step-content">
                <h3>Create your profile in minutes</h3>
              </div>
            </div>
            <div className="how-it-works__step">
              <div className="how-it-works__step-number">2</div>
              <div className="how-it-works__step-content">
                <h3>Save money with no brokers and no extra charges</h3>
              </div>
            </div>
            <div className="how-it-works__step">
              <div className="how-it-works__step-number">3</div>
              <div className="how-it-works__step-content">
                <h3>Book with just a few clicks, no site visit required</h3>
              </div>
            </div>
            <div className="how-it-works__step">
              <div className="how-it-works__step-number">4</div>
              <div className="how-it-works__step-content">
                <h3>Find properties instantly by location, budget, and amenities</h3>
              </div>
            </div>
            <Link to="/pre-register" className="button">Get Started</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;