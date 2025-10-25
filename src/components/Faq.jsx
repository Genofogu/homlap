// src/components/Faq.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import FaqItem from './FaqItem.jsx'; // <-- Import our new component

// We'll store our FAQ data in an array for cleaner code
const faqData = [
  {
    question: "1. What is Homlap?",
    answer: "Homlap is India’s first platform where you can book houses, apartments, or studio apartments in just minutes."
  },
  {
    question: "2. How long does it take to book a house on Homlap?",
    answer: "Booking on Homlap is fast and easy. Your booking is completed in just 3 clicks."
  },
  {
    question: "3. Are all the houses listed on Homlap verified?",
    answer: "Yes, all properties on Homlap are verified by our team before they are listed."
  },
  {
    question: "4. How can I find a house in my preferred location?",
    answer: "You can either search by location in the search bar or choose directly from the map view."
  },
  {
    question: "5. Who can I contact if I face any issue?",
    answer: "You can reach our support team via the Help & Support section or the Contact Us page."
  },
  {
    question: "6. How can I make payments?",
    answer: "You can pay via UPI, Debit/Credit Card, Net Banking, or Wallets."
  }
];

const Faq = () => {
  return (
    <section className="faq" id="faqs">
      <div className="container">
        <div className="faq__heading">
          <h2 className="section-title">FAQs</h2>
          <p className="section-subtitle">
            All details about the item and its function can be found here. <br />
            Can't locate the solution you desire? Reach out to our crew!
          </p>
        </div>

        <div className="faq__grid">
          {/* We map over our data array to render each FaqItem */}
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        <div className="faq__cta-card">
          <div className="faq__cta-content">
            <h3>Still got questions?</h3>
            <p>If you don't find an answer to your question, contact us, and our team will get in touch with you.</p>
          </div>
          <Link to="/contact-us" className="button">Get in touch</Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;