import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { login } from "../services/request";

import "../assets/styles/login.css";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setAuth } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const auth = await login(
        emailRef.current.value,
        passwordRef.current.value
      );

      setAuth(auth);
      navigate(`/categories`);
    } catch (err) {
      alert("Identifiants incorrects");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login_label_form">
      <div className="login_email_block">
        <label className="login_email_label" htmlFor="email">
          Email
        </label>{" "}
        <input
          className="login_email_input"
          ref={emailRef}
          type="email"
          id="email"
          placeholder="adresse email"
        />
      </div>
      <div className="login_password_block">
        <label className="login_password_label" htmlFor="password">
          Mot de passe
        </label>{" "}
        <input
          className="login_password_input"
          type="password"
          id="password"
          ref={passwordRef}
          placeholder="mot de passe"
        />
      </div>
      <button className="add_button login_form_button" type="submit">
        Valider
      </button>
    </form>
  );
}

export default Login;
