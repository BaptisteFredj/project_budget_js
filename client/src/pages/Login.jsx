import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { login } from "../services/request";

function Login() {
  // Références pour les champs email et mot de passe
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser } = useOutletContext();

  // Hook pour la navigation
  const navigate = useNavigate();

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour demander une connexion
      const user = await login(
        emailRef.current.value,
        passwordRef.current.value
      );

      setUser(user);
      navigate(`/transactions`);
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  // Rendu du composant formulaire
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">email</label>{" "}
        <input ref={emailRef} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">password</label>{" "}
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default Login;
