import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productData } from '../data/productData';
import './ProductPage.css';
import OrderStepsCarousel from "../components/OrderStepsCarousel";

const ProductPage = () => {
  const { slug } = useParams();
  const product = productData.find(p => p.slug === slug);
  const [mainImage, setMainImage] = useState(product?.images?.[0] || "");

  if (!product) return <p>Product not found</p>;

  return (
    <section className="product-detail with-bg">
      <div className="gallery-specs-wrapper">
        <div className="gallery">
          <div className="main-image">
            <img src={mainImage} alt="Main View" />
          </div>
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
        </div>

        <div className="specs-diagram">
          <h2>Size & Geometry</h2>
          <ul>
            <li><strong>Total Length:</strong> 79.1" / 201cm</li>
            <li><strong>Wheel Base:</strong> 51.6" / 131cm</li>
            <li><strong>Seat Height:</strong> 34.6" / 88cm</li>
            <li><strong>Handlebar Height:</strong> 45.3" / 115cm</li>
            <li><strong>Rim Diameter:</strong> 24" / 57.5cm</li>
            <li><strong>Standover:</strong> 26.4" / 67cm</li>
            <li><strong>Reach Distance:</strong> 21.3" / 54cm</li>
            <li><strong>Chain Stay Length:</strong> 22.0" / 56cm</li>
            <li><strong>Seat Angle:</strong> No actual seatpost</li>
            <li><strong>Seat Tube Length:</strong> No actual seat tube</li>
            <li><strong>Top Tube Length:</strong> 28.0" / 71cm</li>
            <li><strong>Bike Width:</strong> 28.7" / 73cm</li>
          </ul>
        </div>
      </div>

      <div className="details">
        <h1>{product.name}</h1>
        <div className="detail-box">
          <p className="rating"><strong>Rating:</strong> {product.rating} ⭐ ({product.reviews})</p>
        </div>

        <div className="detail-box">
          <p className="price">
            <strong>Price:</strong> <span className="new-price">${product.price.toLocaleString()}</span>{" "}
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

        <div className="detail-box">
          <p><strong>Color:</strong></p>
          {product.colorOptions.map((color, i) => (
            <span className={`dot ${color}`} key={i}></span>
          ))}
        </div>

        <a
           href="https://buy.stripe.com/test_1234abcd5678efgh" // 🔁 înlocuiește cu linkul real
           target="_blank"
           rel="noopener noreferrer"
           className="add-to-cart"
        >
           BUY NOW – ${product.price.toLocaleString()}
        </a>


        <div className="technical-specs">
          <h2>Technical Specifications</h2>
          <ul>
            <li><strong>Top Speed:</strong> 46–50 MPH</li>
            <li><strong>Range per Charge:</strong> 104–235 miles</li>
            <li><strong>Motor Power:</strong> 2×2500W</li>
            <li><strong>Battery:</strong> 4800Wh 60V 80Ah</li>
            <li><strong>Brakes:</strong> Hydraulic disc with motor cutoff</li>
            <li><strong>Weight:</strong> 174 lbs with battery</li>
          </ul>
        </div>

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
    </section>
  );
};

export default ProductPage;
