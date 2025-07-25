import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="rating">⭐ {product.rating} ({product.reviews})</p>
      <p className="price">
        <span className="current-price">${product.price}</span>
        <del className="old-price">${product.oldPrice}</del>
      </p>
      <p className="details">{product.details}</p>
      <p className="colors">{product.colors} COLORS AVAILABLE</p>
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
};

export default ProductCard;
