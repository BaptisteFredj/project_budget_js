import "../assets/styles/navbar.css";
import PropTypes from "prop-types";
import { useAccount } from "../contexts/AccountContext";
import wallet from "../../public/assets/icons/wallet.svg";
import { formattedNumber } from "../utils/functions";

export default function Navbar({ handleShowLinks }) {
  const { accounts, selectedAccount, setSelectedAccount } = useAccount();

  let selectedAccountData;
  let totalAmount = 0;

  const randomId = "1qzsdq62sqd514";

  if (selectedAccount !== randomId) {
    selectedAccountData = accounts?.find(
      (acc) => acc.id === parseInt(selectedAccount, 10)
    );
  } else {
    totalAmount = accounts?.reduce(
      (accum, account) => accum + parseFloat(account.amount) || 0,
      0
    );
  }

  return (
    <nav className="navbar">
      <section className="navbar_accounts_container">
        <select
          className="navbar_account_select"
          name="account"
          id="account"
          value={selectedAccount}
          onChange={(event) => setSelectedAccount(event.target.value)}
        >
          <option value={randomId}>Total</option>
          {accounts.map((account) => (
            <option key={account.id} value={account?.id}>
              {account.name}
            </option>
          ))}
        </select>

        <div className="wallet_amount_container">
          <img className="wallet_icon" src={wallet} alt="wallet" />
          <div className="selected_amount">
            {selectedAccount === randomId
              ? formattedNumber(totalAmount)
              : formattedNumber(
                  parseFloat(selectedAccountData?.amount || 0)
                )}{" "}
            €
          </div>
        </div>
      </section>
      <ul className="navbar_links">
        <li className="navbar_item">
          <a href="/" className="navbar_link">
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

Navbar.propTypes = {
  handleShowLinks: PropTypes.func.isRequired,
};
