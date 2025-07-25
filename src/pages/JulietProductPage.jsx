import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { julietProductData } from '../data/julietProductData';
import './JulietProductPage.css';
import OrderStepsCarousel from '../components/OrderStepsCarousel';

const JulietProductPage = () => {
  const { slug } = useParams();
  const product = julietProductData.find(p => p.slug === slug);
  const [mainImage, setMainImage] = useState(product?.images?.[0] || "");

  if (!product) return <p>Product not found</p>;

  return (
    <section className="product-detail with-bg">
      <div className="product-wrapper">
        {/* Galerie și Specificații Tehnice */}
        <div className="gallery-specs">
          <div className="thumbnails">
            {product.images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${product.name} ${idx + 1}`}
                className={mainImage === src ? 'active-thumb' : ''}
                onClick={() => setMainImage(src)}
              />
            ))}
          </div>

          <div className="main-and-specs">
            <div className="main-image">
              <img src={mainImage} alt="Main View" />
            </div>

            <div className="technical-specs">
              <h3>Size & Geometry</h3>
              <ul>
                <li><strong>Total Length:</strong> {product.dimensions?.length}</li>
                <li><strong>Wheel Base:</strong> {product.dimensions?.wheelBase}</li>
                <li><strong>Seat Height:</strong> {product.dimensions?.seatHeight}</li>
                <li><strong>Handlebar Height:</strong> {product.dimensions?.handlebarHeight}</li>
                <li><strong>Rim Diameter:</strong> {product.dimensions?.rimDiameter}</li>
                <li><strong>Standover:</strong> {product.dimensions?.standover}</li>
                <li><strong>Reach:</strong> {product.dimensions?.reach}</li>
                <li><strong>Bike Width:</strong> {product.dimensions?.bikeWidth}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detalii produs */}
        <div className="details">
          <h1>{product.name}</h1>

          <div className="detail-box">
            <p className="rating"><strong>Rating:</strong> {product.rating} ⭐ ({product.reviews})</p>
          </div>

          <div className="detail-box">
            <p className="price">
              <strong>Price:</strong>{" "}
              <span className="new-price">${product.price.toLocaleString()}</span>{" "}
              <span className="old">${product.oldPrice.toLocaleString()}</span>
            </p>
          </div>

          <div className="detail-box">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="detail-box">
            <h3>Technical Specifications</h3>
            <ul>
              <li><strong>Top Speed:</strong> {product.topSpeed}</li>
              <li><strong>Range per Charge:</strong> {product.range}</li>
              <li><strong>Motor Power:</strong> {product.motorPower}</li>
              <li><strong>Battery:</strong> {product.battery}</li>
              <li><strong>Brakes:</strong> {product.brakes}</li>
              <li><strong>Weight:</strong> {product.weight}</li>
            </ul>
          </div>

          {/* 🔗 Stripe payment button */}
          <a
            href="https://buy.stripe.com/test_1234abcd5678efgh" // 🔁 înlocuiește cu link real
            target="_blank"
            rel="noopener noreferrer"
            className="add-to-cart"
          >
            BUY NOW – ${product.price.toLocaleString()}
          </a>

          <div className="payment-methods">
            <p><strong>Payment methods:</strong></p>
            <div className="payment-icons">
              <img src="/icons/stripe.svg" alt="Stripe" />
              <img src="/icons/visa.svg" alt="Visa" />
              <img src="/icons/mastercard.svg" alt="Mastercard" />
              <img src="/icons/amex.svg" alt="Amex" />
              <img src="/icons/paypal.svg" alt="PayPal" />
            </div>
          </div>

          <OrderStepsCarousel />
        </div>
      </div>
    </section>
  );
};

export default JulietProductPage;
