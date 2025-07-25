import React from 'react';
import './JulietPage.css';
import { Link } from 'react-router-dom';

const julietProducts = [
  {
    name: "Eahora Juliet II",
    slug: "juliet-ii",
    image: "/images/Juliet_II/jul1.jpg",
    oldPrice: 2899,
    newPrice: 2599,
    rating: 4.7,
    reviews: 10,
    specs: ["48V 1000W", "2500Wh Pouch-Cell"]
  },
  {
    name: "Eahora Juliet III",
    slug: "juliet-iii",
    image: "/images/Juliet_III/jul1.jpg",
    oldPrice: 2999,
    newPrice: 2699,
    rating: 4.8,
    reviews: 8,
    specs: ["48V 1200W", "2700Wh Pouch-Cell"]
  },
  {
    name: "Eahora Juliet Pro New",
    slug: "juliet-pro",
    image: "/images/Juliet_Pro_|_NEW/jul1.jpg",
    oldPrice: 3199,
    newPrice: 2899,
    rating: 5.0,
    reviews: 6,
    specs: ["48V 1500W", "3000Wh Pouch-Cell"]
  },
  {
    name: "Eahora Juliet Pro II",
    slug: "juliet-pro-ii",
    image: "/images/Juliet_Pro_II/jul1.jpg",
    oldPrice: 3399,
    newPrice: 3099,
    rating: 5.0,
    reviews: 5,
    specs: ["48V 1800W", "3200Wh Pouch-Cell"]
  },
  {
    name: "Eahora Juliet",
    slug: "juliet",
    image: "/images/Juliet/jul1.jpg",
    oldPrice: 3599,
    newPrice: 3299,
    rating: 5.0,
    reviews: 7,
    specs: ["48V 2000W", "3500Wh Pouch-Cell"]
  }
];

const JulietPage = () => {
  return (
    <section className="juliet-pages">

      <h2 className="section-title">Juliet Series</h2>
      <div className="product-grid">
        {julietProducts.map((product, idx) => (
          <div key={idx} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} />
              <span className="badge">Sale</span>
              <div className="price-overlay">
                <h4>${product.newPrice}</h4>
                <p className="old-price">${product.oldPrice}</p>
              </div>
              <Link to={`/shop/juliet/${product.slug}`} className="add-to-cart">Add to cart</Link>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="rating">
                {product.rating} ⭐ <span>({product.reviews})</span>
              </p>
              <p>{product.specs[0]} | <span className="new">${product.newPrice.toLocaleString()}</span> <span className="old">${product.oldPrice.toLocaleString()}</span></p>
              <p>{product.specs[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JulietPage;
