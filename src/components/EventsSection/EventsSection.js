import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './EventsSection.css';

// Mock data for the event schedule
const scheduleData = {
  day1: [
    { time: '09:00 AM', title: 'Registration & Coffee', description: 'Doors open! Grab your badge, a coffee, and meet fellow attendees.' },
    { time: '10:00 AM', title: 'Opening Keynote', speaker: 'Alex Doe', description: 'Exploring the future of ethical AI and its impact on society.' },
    { time: '11:30 AM', title: 'The UX of Tomorrow', speaker: 'Jane Smith', description: 'A deep dive into predictive interfaces and emotional design.' },
    { time: '01:00 PM', title: 'Lunch Break', description: 'Refuel and network in the main hall.' },
    { time: '02:30 PM', title: 'Mastering DevOps at Scale', speaker: 'Sam Wilson', description: 'Strategies for building resilient and scalable infrastructure.' },
    { time: '04:00 PM', title: 'Networking Mixer', description: 'Connect with speakers and attendees over refreshments.' },
  ],
  day2: [
    { time: '09:30 AM', title: 'Fireside Chat: Product Vision', speaker: 'Maria Garcia', description: 'How to build a product roadmap that inspires and delivers.' },
    { time: '11:00 AM', title: 'Workshop: Interactive Prototyping', description: 'Hands-on session to level up your design skills.' },
    { time: '01:00 PM', title: 'Lunch & Learn', description: 'Join breakout sessions with our sponsors.' },
    { time: '02:30 PM', title: 'The Quantum Leap in Computing', speaker: 'Dr. Evelyn Reed', description: 'Understanding the next frontier of processing power.' },
    { time: '04:00 PM', title: 'Panel: The Creator Economy', description: 'Top creators discuss the tech that empowers them.' },
  ],
  day3: [
    { time: '10:00 AM', title: 'Building Sustainable Tech', speaker: 'Ben Carter', description: 'Eco-friendly coding and green infrastructure.' },
    { time: '11:30 AM', title: 'Closing Keynote', speaker: 'CEO of TechCorp', description: 'A look ahead at the next decade of technology.' },
    { time: '01:00 PM', title: 'Conference Ends & Afterparty Begins!', description: 'Celebrate a great event with music, food, and fun.' },
  ]
};

const EventsSection = ({ onNavigate }) => {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <AnimatedSection id='events' className="events-page">
      <h1 className="section-title sticker-bg-pink">Events Schedule</h1>
      <div className="schedule-container">
        <div className="day-tabs">
          <button onClick={() => setActiveDay('day1')} className={activeDay === 'day1' ? 'active' : ''}>Day 1</button>
          <button onClick={() => setActiveDay('day2')} className={activeDay === 'day2' ? 'active' : ''}>Day 2</button>
          <button onClick={() => setActiveDay('day3')} className={activeDay === 'day3' ? 'active' : ''}>Day 3</button>
        </div>
        
        <div className="timeline">
          {scheduleData[activeDay].map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-time">{event.time}</div>
              <div className="timeline-content">
                <h3>{event.title}</h3>
                {event.speaker && <span className="timeline-speaker">{event.speaker}</span>}
                <p>{event.description}</p>
              </div>
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

export default EventsSection;