import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { login } from "../services/request";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      const user = await response.data;
      setUser(user);
      navigate(`/categories`);
    } catch (err) {
      alert("Identifiants incorrects");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">email</label>{" "}
        <input ref={emailRef} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">mot de passe</label>{" "}
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <button type="submit">Valider</button>
    </form>
  );
}

export default Login;
