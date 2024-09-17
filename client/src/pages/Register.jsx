import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/request";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">email</label>
        <input ref={emailRef} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">mot de passe</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {password.length >= 8 ? "✅" : "❌"} {`length: ${password.length} >= 8`}
      </div>
      <div>
        <label htmlFor="confirm-password">confirmer le mot de passe</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {password === confirmPassword ? "✅" : "❌"}
      </div>
      <button type="submit">valider</button>
    </form>
  );
}

export default Register;
