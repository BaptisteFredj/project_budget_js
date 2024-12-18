import { useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/request";

import "../assets/styles/login.css";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(emailRef.current.value, passwordRef.current.value);

      navigate(`/dashboard?period=week&limit=10`);
    } catch (err) {
      alert("Identifiants incorrects");
    }
  };

  return (
    <>
      <h1 className="login_title">Connexion</h1>
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
        <Link to="/register">
          <p className="register_link">
            Vous n'êtes pas inscrit ? Cliquez ici pour vous s'inscrire
          </p>
        </Link>
        <button className="add_button login_form_button" type="submit">
          Valider
        </button>
      </form>
    </>
  );
}

export default Login;
