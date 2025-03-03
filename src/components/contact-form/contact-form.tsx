// components/ContactForm.js
import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus("Message envoyé avec succès !");
      setEmail("");
      setMessage("");
    } else {
      setStatus(data.error || "Une erreur est survenue.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre email"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Votre message"
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Envoyer
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
