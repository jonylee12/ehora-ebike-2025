import { useEffect, useState } from "react";

function AdminDashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/contact")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Eroare fetch:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mesaje primite</h2>
      {messages.length === 0 ? (
        <p>Nu există mesaje momentan.</p>
      ) : (
        messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "10px",
              marginBottom: "15px",
              background: "#f9f9f9",
            }}
          >
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Mail:</strong> {msg.email}</p>
            <p><strong>Telefon:</strong> {msg.phone}</p>
            <p><strong>Adrees:</strong> {msg.address}</p>
            <p><strong>Zip Code:</strong> {msg.zip}</p>
            <p><strong>Contry:</strong> {msg.country}</p>
            <p><strong><Mesage></Mesage>:</strong> {msg.message}</p>
            <p style={{ fontStyle: "italic" }}>{new Date(msg.createdAt).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;
