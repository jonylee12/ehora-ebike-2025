import React from 'react'
import './ProductCard.css'

const ProductCard = ({ title, rating, reviews, priceNew, priceOld, specs, colors, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="rating">
        ⭐ {rating} <span>({reviews})</span>
      </p>
      <p className="price">
        <span className="new">${priceNew.toLocaleString()}</span>
        <span className="old">${priceOld.toLocaleString()}</span>
      </p>
      <p className="specs">{specs}</p>
      <p className="colors">{colors} COLORS AVAILABLE</p>
      <button>Add to cart</button>
    </div>
  )
}

export default ProductCard
