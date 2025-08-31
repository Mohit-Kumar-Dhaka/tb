import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './FAQSection.css';

const faqData = [
  { q: 'When and where is Tech Board?', a: 'Tech Board takes place on October 25-27, 2025, at the Grand Tech Arena.' },
  { q: 'Is there a virtual attendance option?', a: 'Yes! We offer a hybrid experience for virtual attendees.' },
  { q: 'What is the refund policy?', a: 'Full refund up to 30 days before the event. Tickets are non-refundable after.' },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = index => setActiveIndex(activeIndex === index ? null : index);

  return (
    <AnimatedSection id="faq" className="faq-section">
      <h2 className="section-title sticker-bg-yellow">FAQ</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.q}
              <span className={`faq-icon ${activeIndex === index ? 'open' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default FAQSection;