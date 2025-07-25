import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    zip: "",
    country: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://usebasin.com/f/c9ffb442b499", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({
          name: "",
          email: "",
          address: "",
          zip: "",
          country: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Eroare la trimitere ❌");
      }
    } catch (error) {
      console.error("Eroare:", error);
      setStatus("Eroare la rețea ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
      <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <input name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required />
      <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
      <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
      <button type="submit">Trimite</button>
      <p>{status}</p>
    </form>
  );
}

export default ContactForm;
