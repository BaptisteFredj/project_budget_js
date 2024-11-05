import { useState } from "react";

import "../assets/styles/navbar.css";
import wallet from "../../public/assets/icons/wallet.svg";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show_nav" : ""}`}>
      <div className="navbar_logo">
        <img src={wallet} alt="wallet" />
      </div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar_item">
          <a href="/register" className="navbar_link">
            Page d'inscription
          </a>
        </li>
        <li className="navbar_item">
          <a href="/login" className="navbar_link">
            Page de connexion
          </a>
        </li>
        <li className="navbar_item">
          <a href="/accounts" className="navbar_link">
            Mes comptes
          </a>
        </li>
        <li className="navbar_item">
          <a href="/categories" className="navbar_link">
            Mes catégories
          </a>
        </li>
        <li className="navbar_item">
          <a href="/transactions/past" className="navbar_link">
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
