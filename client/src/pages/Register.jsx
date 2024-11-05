import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/request";

import "../assets/styles/register.css";

function Register() {
  const emailRef = useRef();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await register(emailRef.current.value, password);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      alert("Il y a une erreur, veuillez réessayer plus tard");
    }
  };

  return (
    <>
      <h1 className="register_title">Inscription</h1>
      <form onSubmit={handleSubmit} className="register_label_form">
        <div className="register_email_block">
          <label className="register_email_label" htmlFor="email">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="adresse email"
            className="register_email_input"
          />
        </div>
        <div className="register_password_block">
          <label className="register_password_label" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="register_password_input"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="mot de passe"
          />
        </div>
        <div className="register_confirm_password_block">
          <label
            className="register_confirm_password_label"
            htmlFor="confirm_password"
          >
            Confirmer le mot de passe
          </label>
          <input
            className="register_confirm_password_input"
            type="password"
            id="confirm_password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="mot de passe"
          />
        </div>
        <button className="add_button register_form_button" type="submit">
          Valider l'inscription
        </button>
      </form>
    </>
  );
}

export default Register;
