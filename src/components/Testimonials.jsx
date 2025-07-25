import React from 'react';
import './Testimonials.css';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Reviews from our customers</h2>
      <p>⭐⭐⭐⭐⭐</p>
      <p>{testimonials.length} Reviews</p>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img src={item.image} alt={item.model} />
            <h4>{item.model}</h4>
            <p>⭐⭐⭐⭐⭐</p>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
            <div className="author">
              <div className="avatar">{item.initials}</div>
              <div>
                <div className="name">{item.name}</div>
                <div className="date">{item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
