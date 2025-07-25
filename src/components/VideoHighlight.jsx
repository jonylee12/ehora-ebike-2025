import React from 'react';
import './VideoHighlight.css';

const VideoHighlight = () => {
  return (
    <section className="video-highlight">
      <div className="video-section">
        <video autoPlay muted loop playsInline>
          <source src="/videos/ebike-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-text">
          <h2>EXPLORE ROMEO ULTRA : https://www.youtube.com/watch?v=mfyk26S4qoE</h2>
          <p>This new 100mile trail e-bike is a thrill! Eahora Romeo Ultra!</p>
          <button>▶ Watch The Review</button>
        </div>
      </div>
      <div className="product-section">
        <img src="/images/romeo-ultra.jpg" alt="Eahora Romeo Ultra" />
        <h3>Eahora Romeo Ultra</h3>
        <p>60V 3000W | <span className="price">$2,599.00</span> <del>$2,999.00</del></p>
        <p>4200Wh Pouch-Cell</p>
        <p>2 COLORS AVAILABLE</p>
      </div>
    </section>
  );
};

export default VideoHighlight;
