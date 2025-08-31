import React from 'react';
import './Marquee.css';

const Marquee = ({ items, className }) => (
  <div className={`marquee ${className}`}>
    <div className="marquee-content">
      {items.map((item, index) => <div key={index} className="marquee-item">{item}</div>)}
      {items.map((item, index) => <div key={`dup-${index}`} className="marquee-item">{item}</div>)}
    </div>
  </div>
);

export default Marquee;