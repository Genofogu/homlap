import React from 'react';
const BenefitCard = ({ icon, title, text }) => {
  return (
    <div className="benefit-card">
      <div className="benefit-card__icon">
        
        {icon}
      </div>
      <div className="benefit-card__content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BenefitCard;