import React from 'react';
import './Slide2.css';

const slidesContent2 = [
  
  { background: 'linear-gradient(to right, #2b5876, #4e4376)', text: 'Slide 1', link: '' },
  { background: 'linear-gradient(to right, #000428, #004e92)', text: 'Slide 2', link: '' },
  { background: 'linear-gradient(to right, #141e30, #243b55)', text: 'Slide 3', link: '' },
  { background: 'linear-gradient(to right, #000046, #1cb5e0)', text: 'Slide 4', link: '' },
  { background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)', text: 'Slide 5', link: '' },
  { background: 'linear-gradient(to right, #ff7e5f, #feb47b)', text: 'Slide 6', link: '' },
  { background: 'linear-gradient(to right, #ff6a00, #ee0979)', text: 'Slide 7', link: '' },
  { background: 'linear-gradient(to right, #ff512f, #dd2476)', text: 'Slide 8', link: '' },
  { background: 'linear-gradient(to right, #e1eec3, #f05053)', text: 'Slide 9', link: '' },
  { background: 'linear-gradient(to right, #22c1c3, #fdbb2d)', text: 'Slide 10', link: '' },
];

const Slide2 = () => {
  return (
    <div className="slider-container2">
      <div className="slider2">
        {slidesContent2.map((slide, index) => (
          <a
            className="slide2"
            style={{ background: slide.background }}
            key={index}
            href={slide.link || '#'}
            onClick={(e) => slide.link === '' && e.preventDefault()} // Link boşsa default davranışı engelle
          >
            {slide.text}
          </a>
        ))}
        {slidesContent2.map((slide, index) => (
          <a
            className="slide2"
            style={{ background: slide.background }}
            key={index + slidesContent2.length}
            href={slide.link || '#'}
            onClick={(e) => slide.link === '' && e.preventDefault()} // Link boşsa default davranışı engelle
          >
            {slide.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Slide2;
