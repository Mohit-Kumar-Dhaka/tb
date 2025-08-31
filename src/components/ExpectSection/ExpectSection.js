import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './ExpectSection.css';


const topicsData = [
  { name: 'Expert Talks', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80' },
  { name: 'Fun + Games', image: 'https://images.unsplash.com/photo-1585079542433-2415d86d572d?auto=format&fit=crop&w=600&q=80' },
  { name: 'Networking', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80' },
  { name: 'Workshops', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80' },
];

const ExpectSection = () => {
  const [preview, setPreview] = useState({ visible: false, src: '', x: 0, y: 0, rotation: 0 });

  const handleMouseMove = (e) => {
    const newRotation = (e.movementX > 0 ? 1 : -1) * 5;
    setPreview(p => ({ ...p, x: e.clientX, y: e.clientY, rotation: newRotation }));
  };
  const handleMouseEnter = (imageSrc) => setPreview(p => ({ ...p, visible: true, src: imageSrc }));
  const handleMouseLeave = () => setPreview(p => ({ ...p, visible: false }));

  return (
    <AnimatedSection className="expect-section">
      <h2 className="section-title">What to Expect</h2>
      <ul className="topics-list">
        {topicsData.map(topic => (
          <li
            key={topic.name}
            onMouseEnter={() => handleMouseEnter(topic.image)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {topic.name}
          </li>
        ))}
      </ul>
      {preview.visible && (
        <img
          src={preview.src}
          className="cursor-preview-image"
          style={{ top: `${preview.y}px`, left: `${preview.x}px`, transform: `translate(-50%, -50%) rotate(${preview.rotation}deg)` }}
          alt="Preview"
        />
      )}
    </AnimatedSection>
  );
};

export default ExpectSection;