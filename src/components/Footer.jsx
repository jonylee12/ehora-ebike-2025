// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Eahora eBikes in Europe. All rights reserved.
      </p>

      <p className="partners-title">In collaboration with:</p>
      <div className="partners">
        <img src="/partners/bosch.gif" alt="Bosch" />
        <img src="/partners/shimano.gif" alt="Shimano" />
        <img src="/partners/samsung.gif" alt="Samsung" />
        <img src="/partners/bafang.gif" alt="Bafang" />
        <img src="/partners/master.svg" alt="Mastercard" />
        <img src="/partners/paypal.svg" alt="PayPal" />
        <img src="/partners/radblu.png" alt="RedBul" />
        <img src="/partners/shopify.svg" alt="Shopify" />
        <img src="/partners/stripe.svg" alt="Stripe" />
        <img src="/partners/veriff.svg" alt="Veriff" />
        <img src="/partners/visa.svg" alt="Visa" />
        <img src="/partners/amazondeliveri.svg" alt="Amazon" />
        <img src="/partners/dhl.png" alt="Dhl" />
        <img src="/partners/free-delivery.png" alt="Deliveri" />
      </div>
    </footer>
  );
};

export default Footer;
