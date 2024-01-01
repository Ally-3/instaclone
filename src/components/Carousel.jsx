import React, { useState, useEffect } from 'react';
import './carousel.css';
import left from '../images/left.png';
import right from '../images/right.png';

const Carousel = ({ images }) => {
  const itemsPerPage = 5; // Number of images to display at a time
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState([]);

  useEffect(() => {
    const updateDisplayedImages = () => {
      const startIndex = activeIndex;
      const endIndex = (startIndex + itemsPerPage - 1) % images.length;

      if (startIndex <= endIndex) {
        setDisplayedImages(images.slice(startIndex, endIndex + 1));
      } else {
        setDisplayedImages([...images.slice(startIndex), ...images.slice(0, endIndex + 1)]);
      }
    };

    updateDisplayedImages();
    }, [activeIndex, images]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-btn carousel-btn-prev">
        <img src={left} width="100%" alt="left"/> 
      </button>
      {displayedImages.map((src, index) => (
        <div className='carousel-img-div'>
            <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="carousel-img"
            />
        </div>
      ))}
      <button onClick={nextSlide} className="carousel-btn carousel-btn-next">
      <img src={right} width="100%" alt="right"/> 
      </button>
    </div>
  );
};

export default Carousel;
