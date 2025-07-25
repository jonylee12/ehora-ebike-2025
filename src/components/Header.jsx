import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

import homeIcon from "../assets/icons/home.png";
import shopIcon from "../assets/icons/shop.png";
import aboutIcon from "../assets/icons/about.png";
import contactIcon from "../assets/icons/contact.png";
import policyIcon from "../assets/icons/policy.png";
import faqIcon from "../assets/icons/faq.png"; // 🔺 acesta lipsea

const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img src={logo} alt="Eahora Logo" className="logo-img" />
        <div className="logo-text-group">
          <span className="logo-text">Eahora in Europe</span>
          <span className="logo-subtext">Free Shipping</span>
        </div>
      </div>
      <nav className="nav-links">
        <a href="/"><img src={homeIcon} alt="Home" className="nav-icon" /></a>
        <a href="/shop"><img src={shopIcon} alt="Shop" className="nav-icon" /></a>
        <a href="/about"><img src={aboutIcon} alt="About" className="nav-icon" /></a>
        <a href="/contact"><img src={contactIcon} alt="Contact" className="nav-icon" /></a>
        <a href="/policy"><img src={policyIcon} alt="Policy" className="nav-icon" /></a>
        <a href="/faq"><img src={faqIcon} alt="FAQ" className="nav-icon" /></a> {/* ✅ fixat */}
      </nav>
    </header>
  );
};

export default Header;
