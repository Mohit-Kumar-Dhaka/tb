import React from 'react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './FooterCTA.css';

const FooterCTA = () => {
  return (
    <AnimatedSection id="cta" className="footer-cta">
      <h2 className="main-headline">Ready for Tech Board?</h2>
      <button className="button-primary large">Get Your Tickets Now</button>
    </AnimatedSection>
  );
};

export default FooterCTA;