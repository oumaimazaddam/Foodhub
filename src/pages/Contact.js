// src/components/Contact.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("⚠️ Tous les champs sont obligatoires.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("⚠️ Veuillez entrer une adresse email valide.");
      return;
    }

    setError("");
    setSubmitted(true);

    // Ici, tu peux envoyer les données à un serveur ou une API
    console.log("Form Submitted:", formData);

    // Réinitialiser le formulaire après soumission
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Optionnel : supprimer le message après 5s
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contactez-nous</h2>

      {error && <p className="error-message">{error}</p>}
      {submitted && <p className="success-message">✅ Message envoyé avec succès !</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label htmlFor="subject">Sujet</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>

        <button type="submit" className="submit-btn">Envoyer le message</button>
      </form>

      <div className="contact-info">
        <h3>Informations de contact</h3>
        <p><FontAwesomeIcon icon={faEnvelope} /> Email: support@yummly.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> Téléphone: +216 79-157-879</p>

        <div className="social-media">
          <a href="https://www.facebook.com/yummly" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} /> Facebook
          </a>
          <a href="https://www.instagram.com/yummly/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
          <a href="https://www.tiktok.com/@yummly" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} /> TikTok
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
