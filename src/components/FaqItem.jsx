// src/components/FaqItem.jsx

import React, { useState } from 'react';

// The component takes the 'question' and 'answer' as props
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <button className="faq-item__question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <div className="faq-item__icon">
          {/* A simple plus/minus icon made with CSS */}
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
      </button>
      <div className="faq-item__answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;