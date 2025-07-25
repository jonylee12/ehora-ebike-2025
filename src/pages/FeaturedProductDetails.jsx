// FeaturedProductDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import featuredProducts from '../data/featuredProductDetails';
import OrderStepsCarousel from '../components/OrderStepsCarousel';
import './FeaturedProductDetails.css';

const FeaturedProductDetails = () => {
  const { id } = useParams();
  const product = featuredProducts.find(p => p.id === id);
  const [mainImage, setMainImage] = useState(product?.images?.[0] || "");

  if (!product) return <p>Product not found</p>;

  return (
    <section className="product-detail with-bg">
      <div className="gallery">
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
        <div className="main-image">
          <img src={mainImage} alt="Main View" />
        </div>
      </div>

      <div className="details">
        <h1>{product.name}</h1>

        <div className="detail-box">
          <p><strong>Description:</strong></p>
          <p>{product.description}</p>
        </div>

        <div className="detail-box">
          <p><strong>Battery:</strong> {product.specs.battery}</p>
          <p><strong>Version:</strong> {product.specs.version}</p>
          <p><strong>Availability:</strong> {product.specs.availability}</p>
        </div>

        <div className="detail-box">
          <p className="price">
            <strong>Price:</strong> <span className="new-price">${product.price}</span>
          </p>
        </div>

        <a
           href="https://buy.stripe.com/test_1234abcd5678efgh"  // 👉 Înlocuiește cu linkul real
           target="_blank"
           rel="noopener noreferrer"
           className="add-to-cart"
        >
           BUY NOW – ${product.price}
        </a>


        <div className="payment-methods">
          <p><strong>Payment methods:</strong></p>
          <div className="payment-icons">
            <img src="/icons/stripe.svg" alt="Stripe" />
            <img src="/icons/visa.svg" alt="Visa" />
            <img src="/icons/mastercard.svg" alt="MasterCard" />
            <img src="/icons/amex.svg" alt="Amex" />
            <img src="/icons/paypal.svg" alt="PayPal" />
          </div>
        </div>

        <OrderStepsCarousel />
      </div>
    </section>
  );
};

export default FeaturedProductDetails;
