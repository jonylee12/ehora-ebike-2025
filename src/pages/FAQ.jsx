import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h3>📦 Do you ship across Europe?</h3>
        <p>Yes! We offer **free shipping** to most European countries including Germany, France, Italy, Spain, and more. Delivery typically takes **3–7 business days**.</p>
      </div>

      <div className="faq-item">
        <h3>🔋 What is the warranty on your eBikes?</h3>
        <p>We offer a **2-year warranty** on the motor, battery, and frame. Other components are covered for **12 months**. Please check our policy page for full terms.</p>
      </div>

      <div className="faq-item">
        <h3>💳 What payment methods do you accept?</h3>
        <p>We accept **Visa, Mastercard, PayPal, Amex, and Stripe**. All payments are processed securely.</p>
      </div>

      <div className="faq-item">
        <h3>⚙️ How do I maintain my eBike?</h3>
        <p>We recommend regular checks on tire pressure, battery health, and brakes. Every Eahora eBike comes with a **digital manual** and access to our **support team**.</p>
      </div>

      <div className="faq-item">
        <h3>📞 Can I contact support for help?</h3>
        <p>Absolutely. You can reach our support via the **Contact** page or by email at <strong>support@eahoraeurope.com</strong>. We reply within 24h on weekdays.</p>
      </div>

      <div className="faq-item">
        <h3>🛵 Are your eBikes street legal in Europe?</h3>
        <p>Yes. All our eBikes comply with **European regulations** and are limited to **25km/h** with pedal-assist to meet road safety standards.</p>
      </div>

    </div>
  );
};

export default FAQ;
