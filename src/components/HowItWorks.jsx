import React from 'react';
import howItWorksPhone from '../assets/images/how-it-works-phone.png';

const steps = [
  {
    title: 'Choose your city and budget',
    text: 'Filter homes by location, rent range, and move-in date in seconds.'
  },
  {
    title: 'Shortlist and book instantly',
    text: 'View verified details, check amenities, and lock your home in a few taps.'
  },
  {
    title: 'Move in without friction',
    text: 'Complete payment and documentation online with Homlap support at every step.'
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works__heading">
          <span className="tag">How it works</span>
          <h2 className="section-title">Simple steps to your next rental home</h2>
          <p>From search to move-in, Homlap keeps renting fast and clear.</p>
        </div>

        <div className="how-it-works__cards">
          {steps.map((step, index) => (
            <article className="how-it-works__card" key={step.title}>
              <span className="how-it-works__card-step">Step {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <img src={howItWorksPhone} alt="Homlap app flow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
