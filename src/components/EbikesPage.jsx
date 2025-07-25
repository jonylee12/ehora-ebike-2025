import React from 'react';
import './EbikesPage.css';
import { Link } from 'react-router-dom';

const ebikeProducts = [
  {
    name: "Eahora Cupid",
    slug: "cupid",
    image: "/images/Ebike/Eahora_Cupid/sol1.jpg",
    oldPrice: 2899,
    newPrice: 2599,
    rating: 4.9,
    reviews: 10,
    specs: ["48V 1000W", "2500Wh Battery"]
  },
  {
    name: "Eahora DL2000",
    slug: "dl2000",
    image: "/images/Ebike/Eahora_DL2000/sol1.jpg",
    oldPrice: 2999,
    newPrice: 2699,
    rating: 4.8,
    reviews: 8,
    specs: ["60V 1500W", "3000Wh Battery"]
  },
  {
    name: "Eahora FT-01",
    slug: "ft-01",
    image: "/images/Ebike/Eahora_FT-01/sol1.jpg",
    oldPrice: 3099,
    newPrice: 2799,
    rating: 5.0,
    reviews: 6,
    specs: ["60V 1600W", "3100Wh Battery"]
  },
  {
    name: "Eahora FT-01 MAX",
    slug: "ft-01-max",
    image: "/images/Ebike/Eahora_FT-01_Max/sol1.jpg",
    oldPrice: 3199,
    newPrice: 2899,
    rating: 5.0,
    reviews: 7,
    specs: ["60V 1800W", "3300Wh Battery"]
  },
  {
    name: "Eahora P5 II",
    slug: "p5-ii",
    image: "/images/Ebike/Eahora_P5_II/sol1.jpg",
    oldPrice: 3299,
    newPrice: 2999,
    rating: 5.0,
    reviews: 9,
    specs: ["48V 1500W", "3000Wh Battery"]
  },
  {
    name: "Eahora P5 Plus",
    slug: "p5-plus",
    image: "/images/Ebike/Eahora_P5_Plus/sol1.jpg",
    oldPrice: 3399,
    newPrice: 3099,
    rating: 5.0,
    reviews: 8,
    specs: ["48V 1600W", "3200Wh Battery"]
  },
  {
    name: "Eahora Luna",
    slug: "luna",
    image: "/images/Ebike/Luna/sol1.jpg",
    oldPrice: 2899,
    newPrice: 2599,
    rating: 4.7,
    reviews: 5,
    specs: ["48V 1000W", "2600Wh Battery"]
  },
  {
    name: "Eahora Luna II",
    slug: "luna-ii",
    image: "/images/Ebike/Luna_II/sol1.jpg",
    oldPrice: 3199,
    newPrice: 2899,
    rating: 5.0,
    reviews: 7,
    specs: ["48V 1200W", "2800Wh Battery"]
  },
  {
    name: "Eahora Terra",
    slug: "terra",
    image: "/images/Ebike/Terra/sol1.jpg",
    oldPrice: 3499,
    newPrice: 3199,
    rating: 5.0,
    reviews: 10,
    specs: ["60V 1800W", "3400Wh Battery"]
  },
  {
    name: "Eahora Terra II",
    slug: "terra-ii",
    image: "/images/Ebike/Terra_II/sol1.jpg",
    oldPrice: 3699,
    newPrice: 3399,
    rating: 5.0,
    reviews: 11,
    specs: ["60V 2000W", "3600Wh Battery"]
  }
];

const EbikesPage = () => {
  return (
    <section className="ebikes-page">
      <h2 className="section-title">eBike Series</h2>
      <div className="product-grid">
        {ebikeProducts.map((product, idx) => (
          <div key={idx} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} />
              <span className="badge">Sale</span>
              <div className="price-overlay">
                <h4>${product.newPrice}</h4>
                <p className="old-price">${product.oldPrice}</p>
              </div>
              <Link to={`/shop/ebike/${product.slug}`} className="add-to-cart">Add to cart</Link>
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

export default EbikesPage;
