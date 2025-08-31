import React , { useState } from 'react';
import './HeroSection.css';


const photoStackData = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1528605248644-effb84b2d895?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
];

const HeroSection = () => {

  const [photos, setPhotos] = useState(photoStackData);

  const [isShuffling, setIsShuffling] = useState(false);


  const handleShuffle = () => {

    if (isShuffling) return; 


    setIsShuffling(true);

  
    setTimeout(() => {

      setPhotos(prevPhotos => {
        const [first, ...rest] = prevPhotos;
        return [...rest, first];
      });

      setIsShuffling(false);
    }, 600);
  };

  return (
    <section className="hero-section">
      <div className="hero-badge">
        ☀️ Friday 8th August, Manchester, UK
      </div>

      <div className="hero-headline-container">
        <h1>Webflow chat, festival vibes, good times.</h1>
      </div>

      <div className="hero-subheadline-container">
        <h2>TechBoard is back.</h2>
      </div>

      <div className="photo-stack">
        {photos.map((photo, index) => (
          <div
            key={photo}

            className={`photo-card ${index === 0 && isShuffling ? 'shuffling' : ''}`}
            style={{
              zIndex: photos.length - index,

              transform: `rotate(${index * -2 + 4}deg) translateX(${index * 5}px)`,
            }}
          >
            <img src={photo} alt={`Event highlight ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="shuffle-button" onClick={handleShuffle} disabled={isShuffling}>
        <span className="shuffle-icon">🔀</span> Shuffle
      </button>
    </section>
  );
};

export default HeroSection;