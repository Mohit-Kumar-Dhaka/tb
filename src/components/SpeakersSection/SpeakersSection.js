import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './SpeakersSection.css';


const speakersData = [
  { name: 'Alex Doe', title: 'AI Ethicist', category: 'Keynote', img: 'https://images.unsplash.com/photo-1531891437562-b1a5808f3a35?auto=format&fit=crop&w=400&q=80' },
  { name: 'Jane Smith', title: 'UX Pioneer', category: 'Design', img: 'https://images.unsplash.com/photo-1580852300654-03c803a15e75?auto=format&fit=crop&w=400&q=80' },
  { name: 'Sam Wilson', title: 'DevOps Guru', category: 'Engineering', img: 'https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=400&q=80' },
  { name: 'Maria Garcia', title: 'Product Visionary', category: 'Product', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
];

const SpeakersSection = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <section ref={ref} id="speakers" className="speakers-section">
            <h2 className="section-title sticker-bg-pink">Speakers</h2>
            <div className={`speakers-grid reveal ${isVisible ? 'visible' : ''}`}>
                {speakersData.map((speaker, index) => (
                    <div key={speaker.name} className="speaker-card" style={{ transitionDelay: `${index * 0.1}s`}}>
                        <img src={speaker.img} alt={speaker.name} />
                        <div className="speaker-info">
                           <span className={`speaker-tag tag-${speaker.category.toLowerCase()}`}>{speaker.category}</span>
                           <h3>{speaker.name}</h3>
                           <p>{speaker.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpeakersSection;