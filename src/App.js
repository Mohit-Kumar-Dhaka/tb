import React from 'react';
import './App.css';


import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Marquee from './components/Marquee/Marquee';
import SpeakersSection from './components/SpeakersSection/SpeakersSection';
import ExpectSection from './components/ExpectSection/ExpectSection';
import FAQSection from './components/FAQSection/FAQSection';
import FooterCTA from './components/FooterCTA/FooterCTA';
import AboutSection from './components/AboutSection/AboutSection';
import EventsSection from './components/EventsSection/EventsSection';


const sponsorsData = ['Sponsor A', 'Sponsor B', 'Sponsor C', 'Sponsor D', 'Sponsor E'];
const testimonialsData = [
  { user: 'CodeWizard', handle: '@cwiz', text: 'Tech Board was mind-blowing! 🤯' },
  { user: 'DesignDiva', handle: '@diva', text: 'Best networking of the year. #TechBoard' },
  { user: 'DataGeek', handle: '@datageek', text: 'Already bought my ticket for next year! 🔥' },
];

function App() {
  const sponsorLogos = sponsorsData.map(s => <span>{s}</span>);
  const testimonialCards = testimonialsData.map((t, i) => (
    <div key={i} className="testimonial-card">
      <div className="testimonial-user">{t.user} <span>{t.handle}</span></div>
      <div className="testimonial-text">{t.text}</div>
    </div>
  ));

  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <Marquee items={sponsorLogos} className="sponsors-marquee" />
        <SpeakersSection />
        <ExpectSection />
        <Marquee items={testimonialCards} className="testimonials-marquee" />
        <EventsSection/>
        <FAQSection />
        <AboutSection/>
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;