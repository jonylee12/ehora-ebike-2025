import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css'; // dacă ai styling separat

const FeaturedProducts = ({ products }) => {
  return (
    <section className="featured-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} className="product-img" />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
           <Link to={`/featured/${product.id}`} className="view-details-btn">
            View Details
          </Link>

        </div>
      ))}
    </section>
  );
};

export default FeaturedProducts;
