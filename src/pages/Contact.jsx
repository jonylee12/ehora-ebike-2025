import React, { useState } from 'react';
import './Contact.css';
import axios from "axios";

const allowedCountries = [
  "United States", "United Kingdom", "Germany", "France", "Italy", "Spain", "Canada", "Australia",
  "Netherlands", "Belgium", "Austria", "Switzerland", "Sweden", "Norway", "Finland", "Denmark",
  "Portugal", "Ireland", "Poland", "Czech Republic", "Slovakia", "Slovenia", "Croatia",
  "Romania", "Hungary", "Bulgaria", "Estonia", "Latvia", "Lithuania", "Greece", "Japan",
  "South Korea", "Singapore", "Israel", "New Zealand", "Mexico", "Brazil", "Argentina",
  "South Africa", "India", "Thailand", "Vietnam", "Malaysia", "Chile"
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    zip: '',
    country: '',
    phone: '',
    email: '',
    message: '',
  });

  // ✅ FUNCTIA CARE LIPSEA:
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://usebasin.com/f/c9ffb442b499", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          address: formData.address,
          zip: formData.zip,
          country: formData.country,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        alert("Mesajul a fost trimis cu succes!");
        setFormData({
          fullName: '',
          address: '',
          zip: '',
          country: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        alert("Eroare la trimiterea mesajului.");
      }
    } catch (error) {
      console.error("Eroare la trimitere:", error);
      alert("A apărut o eroare. Încearcă din nou.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required />
        <select name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Select Country</option>
          {allowedCountries.map((country, idx) => (
            <option key={idx} value={country}>{country}</option>
          ))}
        </select>
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Describe your inquiry..." value={formData.message} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>

      <h2 className="team-title">Our Support Team</h2>
      <div className="team-members">
        {[
          {
            name: "Joris Wan der Walk",
            role: "CEO",
            image: "/images/team/joris.jpg"
          },
          {
            name: "Michely Huser",
            role: "Marketing Lead",
            image: "/images/team/michely.jpg"
          },
          {
            name: "Cristian Bscher",
            role: "Lead Engineer",
            image: "/images/team/cristian.jpg"
          }
        ].map((member, idx) => (
          <div key={idx} className="team-card">
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
