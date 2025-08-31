import React from 'react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './AboutSection.css';


const teamData = [
  { name: 'Alex Doe', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1531891437562-b1a5808f3a35?auto=format&fit=crop&w=400&q=80' },
  { name: 'Jane Smith', role: 'Head of Content', img: 'https://images.unsplash.com/photo-1580852300654-03c803a15e75?auto=format&fit=crop&w=400&q=80' },
  { name: 'Sam Wilson', role: 'Lead Engineer', img: 'https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=400&q=80' },
];

const AboutSection = ({ onNavigate }) => {
  return (
    <AnimatedSection id="about" className="about-page">
      <h1 className="section-title sticker-bg-yellow">About Tech Board</h1>
      <div className="about-content">
        <p className="about-mission">
          Since 2020, Tech Board has been the premier gathering for the brightest minds in technology. Our mission is to foster innovation, inspire creativity, and build a community that pushes the boundaries of what's possible. We believe in the power of connection and the endless potential of shared ideas.
        </p>
        
        <h2 className="team-headline">Meet the Team</h2>
        <div className="team-grid">
          {teamData.map(member => (
            <div key={member.name} className="team-member-card">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        
        <a href='/' className="button-primary back-button">
          Back to Home
        </a>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;