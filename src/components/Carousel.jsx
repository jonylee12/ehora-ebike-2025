import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
  "/images/banner4.jpg",
  "/images/banner5.jpg",
  "/images/banner6.jpg",
  "/images/banner7.jpg",
  "/images/banner8.jpg",
  "/images/banner9.jpg"
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 secunde

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <img src={images[index]} alt={`Banner ${index + 1}`} />
    </div>
  );
};

export default Carousel;
