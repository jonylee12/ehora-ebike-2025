// EbikesProductPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ebikeProductData } from '../data/ebikeProductData';
import './EbikesProductPage.css';
import OrderStepsCarousel from '../components/OrderStepsCarousel';

const EbikesProductPage = () => {
  const { slug } = useParams();
  const product = ebikeProductData.find(p => p.slug === slug);
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
          <p><strong>Description:</strong></p>
          <p>{product.description}</p>
        </div>

        <div className="detail-box">
          <p><strong>Battery:</strong> {product.battery}</p>
          <p><strong>Version:</strong> {product.version}</p>
          <p className={product.stock ? "in-stock" : "out-of-stock"}>
            {product.stock ? "In stock, ships in 1 day" : "Out of stock"}
          </p>
        </div>

        {/* 🔗 Stripe link înlocuiește butonul inactiv */}
        <a
          href="https://buy.stripe.com/14A4gAfgv5JZ2Mi6BW4AU00" // 🔁 înlocuiește cu linkul tău real Stripe
          target="_blank"
          rel="noopener noreferrer"
          className="add-to-cart"
        >
          ADD TO CART – ${product.price}
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
          <OrderStepsCarousel />
        </div>
      </div>
    </section>
  );
};

export default EbikesProductPage;
