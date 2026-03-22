import React from 'react';
import FaqItem from './FaqItem.jsx';

const faqData = [
  {
    question: 'What is Homlap?',
    answer: 'Homlap is a rental platform where you can find and book verified homes quickly without broker hassle.'
  },
  {
    question: 'How do I book a home?',
    answer: 'Choose your location, shortlist properties, and complete booking with digital documents and payment.'
  },
  {
    question: 'Can I schedule a visit before booking?',
    answer: 'Yes. You can request a virtual or physical visit based on listing availability in your city.'
  },
  {
    question: 'How can I trust your listings?',
    answer: 'Our team verifies owner details, images, and location information before properties go live.'
  },
  {
    question: 'How are bookings and payments handled?',
    answer: 'Payments are secured online. You receive a booking summary and support access instantly.'
  }
];

const Faq = () => {
  return (
    <section className="faq" id="faqs">
      <div className="container">
        <div className="faq__heading">
          <span className="tag">FAQ’s</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq__grid">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
