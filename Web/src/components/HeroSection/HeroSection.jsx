import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [position, setPosition] = useState(0);

  const handlePrevious = () => {
    setPosition((prevPosition) => (prevPosition === 0 ? images.length - 1 : prevPosition - 1));
  };

  const handleNext = () => {
    setPosition((prevPosition) => (prevPosition + 1) % images.length);
  };

  const images = [
    'https://www.mouthhealer.com/img/slide1.jpg',
    'https://www.mouthhealer.com/img/slide2.jpg',
    'https://www.mouthhealer.com/img/slide3.jpg',
    // Add more image URLs as needed
  ];

  return (
    <section className='hero-section'>
      <div className='hero-background-image' style={{ backgroundImage: `url(${images[position]})` }}></div>
      <div className='hero-content'>
        <h1 className='hero-header'>Dental Implants</h1>
        <p className='hero-subtitle'>Full Mouth Rehabilitation is also known as Full Mouth Restoration or Full Mouth Reconstruction.</p>
        <button  className='hero-read-more-button'>
          Read More &rarr;
        </button>
      </div>
      <div className='arrow-buttons'>
        <button className='previous-button' onClick={handlePrevious}>&#8249;</button>
        <button className='next-button' onClick={handleNext}>&#8250;</button>
      </div>
    </section>
  );
};

export default HeroSection;
