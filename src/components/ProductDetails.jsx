import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/productsControllers';
import OrderStepsCarousel from '../components/OrderStepsCarousel';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  if (!product) return <div className="not-found">Product not found.</div>;

  return (
    <div
      className="product-page"
      style={{
        backgroundImage: 'url(/images/backgrounds/product-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <div className="product-wrapper">
        {/* Galerie imagini */}
        <div className="product-gallery">
          {product.images && product.images.length > 0 ? (
            product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} view ${idx + 1}`}
                onError={(e) => {
                  e.target.src = "/images/placeholder.jpg";
                }}
              />
            ))
          ) : (
            <img src={product.image} alt={product.name} />
          )}
        </div>

        {/* Detalii produs */}
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-desc">{product.description}</p>

          {product.specs && (
            <ul className="product-specs">
              {Object.entries(product.specs).map(([key, val]) => (
                <li key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {val}
                </li>
              ))}
            </ul>
          )}

          <p className="product-price">${product.price}</p>
          <a
            href="https://buy.stripe.com/test_1234abcd5678efgh" // 🔁 înlocuiește cu linkul real
            target="_blank"
            rel="noopener noreferrer"
            className="add-to-cart"
         >
            BUY NOW – ${product.price.toLocaleString()}
         </a>


          {/* Metode de plată */}
          <div className="payment-section">
            <h2>Payment methods:</h2>
            <div className="payment-icons">
              <img src="/steps/stripe.svg" alt="Stripe" />
              <img src="/steps/visa.svg" alt="Visa" />
              <img src="/steps/mastercard.svg" alt="MasterCard" />
              <img src="/steps/amex.svg" alt="Amex" />
              <img src="/steps/paypal.svg" alt="PayPal" />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <OrderStepsCarousel />
    </div>
  );
};

export default ProductDetails;
