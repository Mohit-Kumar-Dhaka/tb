import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const AnimatedSection = ({ children, className, id }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section ref={ref} id={id || null} className={`${className || ''} reveal ${isVisible ? 'visible' : ''}`}>
      {children}
    </section>
  );
};

export default AnimatedSection;