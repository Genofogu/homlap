import React from 'react';

const Features = () => {
  return (
    <section className="features" id="feature">
      <div className="container">
        <div className="features__heading">
          <span className="tag">FEATURES</span>
          <h2 className="section-title">
            “Find, Book, and Move with Homlap – Your Home in Just Minutes!
          </h2>
        </div>

        <div className="features__grid">
          {/* Feature 1 */}
          <div className="features__item">
            <div className="features__item-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Instant Booking</h3>
            <p>Book a house or apartment in just a few minutes with a simple, user-friendly interface.</p>
          </div>

          {/* Feature 2 */}
          <div className="features__item">
            <div className="features__item-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 6V3H18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Real-Time Availability</h3>
            <p>See available houses and apartments in real time. Avoid double bookings or waiting for manual updates.</p>
          </div>

          {/* Feature 3 */}
          <div className="features__item">
            <div className="features__item-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                 <path d="M20 12V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M16 4H22V10" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M22 4L12 14" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Secure Payment & Flexible Options</h3>
            <p>Pay securely through the app using multiple payment methods. Flexible booking durations and cancellation options make it hassle-free.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;