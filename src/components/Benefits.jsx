import React from 'react';

const stats = [
  { value: '400,000+', label: 'Verified listings viewed' },
  { value: '250,000+', label: 'Hours saved for renters' },
  { value: '1,500+', label: 'Landlords and partners' }
];

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <div className="benefits__heading">
          <span className="tag">Why Homlap</span>
          <h2 className="section-title">On-demand rental support for modern city living</h2>
          <p>No broker drama. Just verified homes and instant booking confidence.</p>
        </div>

        <div className="benefits__stats">
          {stats.map((item) => (
            <article className="benefits__stat" key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
