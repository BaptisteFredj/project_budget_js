import "../assets/styles/navbar.css";
import { PropTypes } from "prop-types";
import wallet from "../../public/assets/icons/wallet.svg";

export default function Navbar({ handleShowLinks }) {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={wallet} alt="wallet" />
      </div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <a href="/dashboard?period=week" className="navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar_item">
          <a href="/register" className="navbar_link">
            Inscription
          </a>
        </li>
        <li className="navbar_item">
          <a href="/login" className="navbar_link">
            Connexion
          </a>
        </li>
        <li className="navbar_item">
          <a href="/categories" className="navbar_link">
            Mes catégories
          </a>
        </li>
        <li className="navbar_item">
          <a href="/transactions?date=past" className="navbar_link">
            Mes transactions
          </a>
        </li>
        <li className="navbar_item">
          <a href="/budgets" className="navbar_link">
            Mes budgets
          </a>
        </li>
      </ul>
      <button
        label="text"
        type="button"
        className="navbar_burger"
        onClick={handleShowLinks}
      >
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  handleShowLinks: PropTypes.func.isRequired,
};
