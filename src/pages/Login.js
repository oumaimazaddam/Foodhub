import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true); // Toggle entre Login et Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      
      console.log("Connexion réussie :", { email, password });
      alert("Connexion réussie !");
    } else {
      
      if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas !");
        return;
      }
      console.log("Inscription réussie :", { email, password });
      alert("Inscription réussie !");
      setIsLoginMode(true); 
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">{isLoginMode ? "Connection" : "Inscription"}</h2>
<br></br>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {!isLoginMode && (
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit" className="login-btn">
          <FontAwesomeIcon icon={isLoginMode ? faSignInAlt : faUserPlus} />
          {isLoginMode ? "Se connecter" : "S'inscrire"}
        </button>

        <div className="toggle-link">
          <p>
            <span
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="toggle-text"
              style={{ cursor: "pointer", color: "#007BFF" }}
            >
              {isLoginMode ? "Créer un compte" : "Déjà un compte ? Connectez-vous"}
            </span>
          </p>
        </div>

        <div className="social-login">
          <h3> Connectez-vous avec </h3>
          <div className="social-media">
            {[
              { icon: faFacebookF, name: "Facebook", link: "https://www.facebook.com/" },
              { icon: faInstagram, name: "Instagram", link: "https://www.instagram.com/" },
              { icon: faTiktok, name: "Tiktok", link: "https://www.tiktok.com/en/" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                style={{
                  margin: "0 10px",
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <FontAwesomeIcon icon={social.icon} /> {social.name}
              </a>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
