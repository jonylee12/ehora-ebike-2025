import React from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Romeo",
    image: "/images/categories/romeo.jpg",
    path: "/shop/romeo"
  },
  {
    name: "Juliet",
    image: "/images/categories/juliet.jpg",
    path: "/shop/juliet"
  },
  {
    name: "eBike",
    image: "/images/categories/ebike.jpg",
    path: "/shop/ebike"
  }
];

const accessories = [
  {
    id: "ace_xc300_battery",
    name: "ACE / XC300 Battery Pack",
    price: "From $321.30",
    oldPrice: "$459.66",
    rating: "4.8 (25)",
    compatibility: "for Ace/XC300",
    image: "/images/Beteery/ACE_XC300_Battery_Pack/ace_xc300.jpg"
  },
  {
    id: "x5_x7_battery",
    name: "X5 / X7 Battery Pack",
    price: "From $469.00",
    rating: "5.0 (4)",
    compatibility: "for 14Ah/15Ah/17.5Ah Version",
    image: "/images/Beteery/X5_X7_Battery_Pack/x5_x7.jpg"
  },
  {
    id: "apus_battery",
    name: "Apus Battery Pack",
    price: "From $439.00",
    rating: "4.8 (23)",
    compatibility: "for Apus",
    image: "/images/Beteery/Apus_Battery_Pack/apus.jpg"
  },
  {
    id: "p5_battery",
    name: "P5 Battery Pack",
    price: "$499.00",
    rating: "5.0 (1)",
    compatibility: "for 15Ah/20Ah Version",
    image: "/images/Beteery/P5_Battery_Pack/p5.jpg"
  },
  {
    id: "luna_terra_battery",
    name: "Luna / Terra Battery Pack",
    price: "From $469.99",
    oldPrice: "$499.99",
    compatibility: "for Luna & Terra series",
    image: "/images/Beteery/Luna_Terra_Battery_Pack/luna_terra.jpg"
  },
  {
    id: "am_xc200_battery",
    name: "AM100 / AM200 / XC200 Battery Pack",
    price: "From $449.00",
    rating: "4.8 (4)",
    compatibility: "for 14Ah/15Ah/20Ah Version",
    image: "/images/Beteery/AM100_AM200_XC200_Battery Pack/am_xc200.jpg"
  },
  {
    id: "cupid_battery",
    name: "Cupid Battery Pack",
    price: "$579.99",
    rating: "5.0 (1)",
    compatibility: "for 30Ah Version",
    image: "/images/Beteery/Cupid_Battery_Pack/cupid.jpg"
  },
  {
    id: "urban_battery",
    name: "Urban Battery Pack",
    price: "$469.00",
    rating: "4.8 (23)",
    compatibility: "for Urban/Urban Special",
    image: "/images/Beteery/Urban_Battery_Pack/urban.jpg"
  },
  {
    id: "ft01_battery",
    name: "FT-01 Battery Pack",
    price: "From $549.99",
    rating: "5.0 (1)",
    compatibility: "for 20Ah Version",
    image: "/images/Beteery/FT-01_Battery_Pack/ft01.jpg"
  }
];

const controllers = [
  {
    id: "juliet_iii_controller",
    name: "Juliet III Controller",
    price: "$139.00",
    compatibility: "for Juliet III",
    image: "/images/controllers/Juliet_III_Controller/juliet-iii.jpg"
  },
  {
    id: "juliet_controller",
    name: "Juliet Controller",
    price: "$129.00",
    compatibility: "for Juliet",
    image: "/images/controllers/Juliet_Controller/juliet.jpg"
  },
  {
    id: "original_controller",
    name: "Original Controller",
    price: "$115.99",
    compatibility: "Sold Out",
    image: "/images/controllers/Original_Controller/juliet.jpg"
  },
  {
    id: "romeo_pro_ii_controller",
    name: "Romeo Pro II Controller",
    price: "$149.00",
    compatibility: "for Romeo Pro II",
    image: "/images/controllers/Romeo_Pro_II_Controller/romeo-pro-ii.jpg"
  },
  {
    id: "romeo_ii_controller",
    name: "Romeo II Controller",
    price: "$139.00",
    compatibility: "for Romeo II",
    image: "/images/controllers/Romeo_II_Controller/romeo-ii.jpg"
  },
  {
    id: "romeo_pro_controller",
    name: "Romeo Pro Controller",
    price: "$139.00",
    compatibility: "for Romeo Pro",
    image: "/images/controllers/Romeo_Pro_Controller/romeo-pro.jpg"
  }
];

const Shop = () => {
  return (
    <section className="shop-page">
  {/* 🔲 Fundal banner */}
  <div className="collection-banner">
    <img src="/images/bg-shop-pattern.jpg" alt="Shop Banner" className="banner-img" />

    {/* ✅ Butoane negre peste banner */}
    <div className="category-buttons">
      {categories.map((cat, index) => (
        <Link to={cat.path} key={index} className="category-btn">
          {cat.name}
        </Link>
      ))}
    </div>
  </div>

  {/* 🔋 Accesorii */}
  <h2 className="shop-subtitle">Compatible Battery Packs</h2>
  <div className="accessory-grid">
    {accessories.map((item, idx) => (
      <Link to={`/product/${item.id}`} key={idx} className="accessory-card">
        <img src={item.image} alt={item.name} />
        <div className="accessory-info">
          <h3>{item.name}</h3>
          <p>{item.compatibility}</p>
          <p className="rating">{item.rating}</p>
          <p className="price">
            {item.price} {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
          </p>
          <button className="buy-button">View Details</button>
        </div>
      </Link>
    ))}
  </div>

  {/* 🎮 Controllere */}
  <h2 className="shop-subtitle">Controllers</h2>
  <div className="accessory-grid">
    {controllers.map((ctrl, idx) => (
      <Link to={`/product/${ctrl.id}`} key={idx} className="accessory-card">
        <img src={ctrl.image} alt={ctrl.name} />
        <div className="accessory-info">
          <h3>{ctrl.name}</h3>
          <p>{ctrl.compatibility}</p>
          <p className="price">{ctrl.price}</p>
          <button className="buy-button">View Details</button>
        </div>
      </Link>
    ))}
  </div>
</section>

  );
};

export default Shop;