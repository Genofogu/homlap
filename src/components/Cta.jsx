import { Link } from 'react-router-dom';
import React from 'react';
import ctaPerson from '../assets/images/cta-person.png';

const Cta = () => {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta__content">
          <h2 className="section-title">
            Minutes to book, a home that feels like forever
          </h2>
          {/* We add a 'modifier' class to style this button differently */}
         <Link to="/pre-register" className="button button--light">Get Started</Link>
        </div>
        <div className="cta__visual">
         <img src={ctaPerson} alt="Happy person relaxing in their new home" /> 
        </div>
      </div>
    </section>
  );
};

export default Cta;