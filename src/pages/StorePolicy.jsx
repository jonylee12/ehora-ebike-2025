import React from "react";
import "./StorePolicy.css";

const StorePolicy = () => {
  return (
    <div className="policy-container">
      <h1>Store Policy</h1>

      <section>
        <h2>Shipping Policy</h2>
        <p>
          We offer worldwide shipping to eligible countries via trusted carriers including Amazon Logistics, DHL, FedEx, and UPS. 
          Orders are processed within 1-3 business days. Estimated delivery times vary by location but generally range between 5-12 business days. 
          You will receive a tracking number once the package is dispatched.
        </p>
        <p>
          ECO-bike Ltd is not responsible for delays caused by customs clearance, natural events, or carrier delays. 
          Shipping to countries under global sanctions (e.g., Russia, Syria, Afghanistan) is not available.
        </p>
      </section>

      <section>
        <h2>Return & Refund Policy</h2>
        <p>
          Returns are accepted within 14 days of delivery for unused products in original packaging. 
          Return shipping costs are the customer's responsibility unless the item is defective or incorrect. 
          Once the return is received and inspected, refunds will be processed within 7 business days to the original payment method.
        </p>
        <p>
          Products showing signs of use, modification, or damage not caused by delivery issues are not eligible for return.
        </p>
      </section>

      <section>
        <h2>Customer Conduct</h2>
        <p>
          We expect our customers to interact with respect and integrity during all communications. 
          Abusive, fraudulent, or malicious behavior may result in order cancellation or account restriction. 
          Our customer support team is committed to helping you resolve any issue in a professional and friendly manner.
        </p>
      </section>

      <section>
        <h2>ECO-bike Ltd Liability</h2>
        <p>
          ECO-bike Ltd is not liable for injury, loss, or damage resulting from improper use, assembly, or maintenance of eBikes. 
          Customers are advised to follow all safety guidelines provided with the product and to comply with local traffic regulations.
        </p>
        <p>
          Our warranty covers manufacturer defects only and does not include damage caused by accidents, misuse, or unauthorized repairs.
        </p>
      </section>

      <section>
        <h2>Jurisdiction & Legal Responsibility</h2>
        <p>
          All purchases are governed by the laws applicable in the country of the customer’s residence, provided it is among our shipping destinations. 
          Any legal disputes must be resolved under the jurisdiction of the competent courts in that region.
        </p>
        <p>
          ECO-bike Ltd complies with GDPR and consumer protection regulations in Europe and the countries we operate in.
        </p>
      </section>
    </div>
  );
};

export default StorePolicy;
