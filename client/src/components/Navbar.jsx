import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../assets/styles/navbar.css";

export default function Navbar({ authTools }) {
  return (
    <nav className="navbar">
      <ul className="navbar_buttons">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        {authTools.auth == null ? (
          <>
            <li>
              <Link to="/login">Se connecter</Link>
            </li>
            <li>
              <Link to="/register">S'inscrire</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/transactions/past">Mes transactions</Link>
            </li>
            <li>
              <Link to="/categories">Mes catégories</Link>
            </li>
            <li>
              <Link to="/budgets">Mes budgets</Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  authTools.setAuth(null);
                }}
              >
                Se déconnecter
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  authTools: PropTypes.shape({
    auth: PropTypes.shape({}),
    setAuth: PropTypes.func.isRequired,
  }).isRequired,
};
