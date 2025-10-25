// src/components/Benefits.jsx

import React from 'react';
import BenefitCard from './BenefitCard.jsx'; // Make sure this path is correct

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <div className="benefits__heading">
          <span className="tag">BENEFITS</span>
          <h2 className="section-title">Homlap House Rent Benefits You’ll Love</h2>
        </div>

        <div className="benefits__main">
          <div className="benefits__content">
            <BenefitCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {/* The SVG path for the piggy bank */}
                  <path d="M2.99993 10C2.99993 11.6484 3.66466 13.1415 4.74067 14.226... (rest of path)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              title="Fast Booking"
              text="Book your home in just minutes – quick and easy."
            />
            <BenefitCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {/* The SVG path for the share icon */}
                  <path d="M5.59 11.51L12.42 15.49M12.41 4.51L5.59 8.49M18 3... (rest of path)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              title="Time-Saving"
              text="No long processes – find and book your home in minutes."
            />
            <BenefitCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {/* The SVG path for the refresh icon */}
                  <path d="M0 11C0 11 0.12132 11.8492 3.63604 15.364... (rest of path)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              title="Access Anywhere, Anytime"
              text="Book your home from mobile or desktop, anytime, anywhere."
            />
            <BenefitCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {/* The SVG path for the pin icon */}
                  <path d="M6.3767 13.6172L0.719849 19.274M9.69439 4.64267... (rest of path)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              title="Affordable & Transparent"
              text="No hidden charges – fully clear and budget-friendly."
            />
          </div>
          <div className="benefits__visual">
            <img src="https://framerusercontent.com/images/ZakTInlvJL0Mfl4dH4G6d8dwj4.png" alt="Homlap Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;