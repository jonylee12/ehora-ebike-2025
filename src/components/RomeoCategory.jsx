import React from 'react';
import './RomeoCategory.css';
import { Link } from 'react-router-dom';

const romeoProducts = [
  {
    name: "Eahora Romeo Pro",
    slug: "romeo-pro",
    image: "/images/Romeo_Pro/rom1.jpg",
    oldPrice: 3299,
    newPrice: 3000,
    rating: 4.9,
    reviews: 9,
    specs: ["60V 3000W", "4000Wh Pouch-Cell"]
  },
  {
    name: "Eahora Romeo II",
    slug: "romeo-ii",
    image: "/images/Romeo_II/rom1.jpg",
    oldPrice: 2999,
    newPrice: 2800,
    rating: 4.8,
    reviews: 11,
    specs: ["60V 2800W", "3800Wh Pouch-Cell"]
  },
  {
    name: "Eahora Romeo Pro II",
    slug: "romeo-pro-ii",
    image: "/images/Romeo_Pro_II/rom1.jpg",
    oldPrice: 3199,
    newPrice: 2900,
    rating: 5.0,
    reviews: 7,
    specs: ["60V 3500W", "4100Wh Pouch-Cell"]
  },
  {
    name: "Eahora Romeo Pro III",
    slug: "romeo-pro-iii",
    image: "/images/Romeo_Pro_III/rom1.jpg",
    oldPrice: 3399,
    newPrice: 3100,
    rating: 5.0,
    reviews: 6,
    specs: ["60V 3700W", "4200Wh Pouch-Cell"]
  },
  {
    name: "Eahora Romeo Ultra",
    slug: "romeo-ultra",
    image: "/images/Romeo_Ultra/rom1.jpg",
    oldPrice: 3599,
    newPrice: 3300,
    rating: 5.0,
    reviews: 12,
    specs: ["60V 4000W", "4400Wh Pouch-Cell"]
  },
  {
    name: "Eahora Romeo Ultra II",
    slug: "romeo-ultra-ii",
    image: "/images/Romeo_Ultra_II/rom1.jpg",
    oldPrice: 3799,
    newPrice: 3499,
    rating: 5.0,
    reviews: 13,
    specs: ["60V 4500W", "4600Wh Pouch-Cell"]
  },
  {
    name: "Eahora Romeo Ultra II 2025",
    slug: "romeo-ultra-ii-2025",
    image: "/images/Romeo_Ultra_II_2025/rom1.jpg",
    oldPrice: 3999,
    newPrice: 3599,
    rating: 5.0,
    reviews: 14,
    specs: ["60V 5000W", "4800Wh Pouch-Cell"]
  }
];

const RomeoCategory = () => {
  return (
    <section className="romeo-category">
      <h2 className="section-title">Romeo Series</h2>
      <div className="product-grid">
        {romeoProducts.map((product, idx) => (
          <div key={idx} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} />
              <span className="badge">Sale</span>
              <div className="price-overlay">
                <h4>${product.newPrice}</h4>
                <p className="old-price">${product.oldPrice}</p>
              </div>
              <div className="button-group">
                <Link to={`/shop/romeo/${product.slug}`} className="add-to-cart">
                  View Details
                </Link>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="rating">
                {product.rating} ⭐ <span>({product.reviews})</span>
              </p>
              <p>
                {product.specs[0]} | <span className="new">${product.newPrice.toLocaleString()}</span>{" "}
                <span className="old">${product.oldPrice.toLocaleString()}</span>
              </p>
              <p>{product.specs[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RomeoCategory;
