import React from 'react';
import ctaPerson from '../assets/images/cta-person.png';

const Features = () => {
  return (
    <section className="features" id="feature">
      <div className="container">
        <div className="features__heading">
          <span className="tag">Homes you can trust</span>
          <h2 className="section-title">Book trusted homes with total clarity</h2>
          <p>Real photos, verified owners, and pricing transparency before you commit.</p>
        </div>

        <div className="features__gallery">
          <img src={ctaPerson} alt="Laundry area in a rental home" />
          <img src={ctaPerson} alt="Well maintained room" />
          <img src={ctaPerson} alt="Clean and ready home setup" />
        </div>
      </div>
    </section>
  );
};

export default Features;
